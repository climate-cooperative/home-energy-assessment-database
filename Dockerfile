FROM node:iron-alpine3.18 as base

FROM base as builder

COPY ./server .
RUN npm i

FROM base as release

WORKDIR /app

COPY --from=builder ./src/ ./src/
COPY --from=builder ./node_modules/ ./node_modules/
COPY --from=builder ./package.json .
COPY --from=builder ./.env .

EXPOSE 3001

CMD [ "npm", "start" ]



