# Home Energy Assesment Database Environment Config

This service uses inversify for `ioc` and `di` capabilities.

It also handles auto-injecting and configuing certain services for use in higher-order logic.

All configuration should live inside a `.env` file.

Proceed to the following section to specific setup.

- [AWS DynamoDB](#aws-dynamodb)

## AWS DynamoDB

Ideally utilize AWS security best practices for inheriting AWS credentials.

Add and configure the following to your `.env` file or environemnt variables

```(shell)
DATA_SOURCE=DYNAMODB    # let app know to configure for dynamodb data source

AWS_DYNAMO_ENDPOINT=    # configure aws endpoint. [aws docs](https://docs.aws.amazon.com/general/latest/gr/ddb.html)

```

### Optional Config

```(shell)
# indexes
# currently only 1 index is supported
DYNAMO_INDEX_TABLE=     # table where index lives
DYNAMO_INDEX_COLS=      # columns included in index. comma seperated list
DYNAMO_INDEX_NAME=      # name of index
```

