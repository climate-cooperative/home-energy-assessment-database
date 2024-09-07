FROM localstack/localstack:stable

# make sure the directory that `apt` will install to has precedence in the PATH
ENV PATH="/usr/bin:${PATH}"
# setup and install node 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt update && apt install -y nodejs

# install npm dependencies and build the api server code
COPY . .
RUN npm ci
RUN npm run build

# pre-configure `localstack` to include dynamo with populated tables
ENV SERVICES=dynamodb
ENV AWS_ACCESS_KEY_ID=dummy
ENV AWS_SECRET_ACCESS_KEY=dummy
COPY init_dynamodb.sh /etc/localstack/init/ready.d/init-aws.sh
RUN curl -L https://github.com/climate-cooperative/home-energy-data-manager/releases/download/latest/dynamo-entries.tgz \
    --output /etc/localstack/init/ready.d/dynamo-entries.tgz

ENTRYPOINT [ "bash", "-c", "npm run start:local & docker-entrypoint.sh" ]