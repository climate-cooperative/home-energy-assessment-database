resource "aws_dynamodb_table" "zwell_appliance_table" {
  name = "prod_zwell_appliance_table"
  billing_mode = "PAY_PER_REQUEST" // free < 1mil read/write ops/units... ALOT
  hash_key = "_id" // primary key
  range_key = "appliance" // sort key

  attribute {
        name = "_id"
        type = "S"
      }
  attribute {
          name = "appliance"
          type = "S"
        }
}

resource "aws_dynamodb_table" "zwell_hvac_table" {
  name = "prod_zwell_hvac_table"
  billing_mode = "PAY_PER_REQUEST" // free < 1mil read/write ops/units... ALOT
  hash_key = "_id" // primary key
  range_key = "display_name" // sort key

  attribute {
        name = "_id"
        type = "S"
      }
  attribute {
          name = "display_name"
          type = "S"
        }
}

resource "aws_dynamodb_table" "zwell_home_decade_table" {
  name = "prod_zwell_home_decade_table"
  billing_mode = "PAY_PER_REQUEST" // free < 1mil read/write ops/units... ALOT
  hash_key = "_id" // primary key
  range_key = "decade" // sort key

  attribute {
        name = "_id"
        type = "S"
      }
  attribute {
          name = "decade"
          type = "S"
        }
}

resource "aws_dynamodb_table" "zwell_home_type_table" {
  name = "prod_zwell_home_type_table"
  billing_mode = "PAY_PER_REQUEST" // free < 1mil read/write ops/units... ALOT
  hash_key = "_id" // primary key
  range_key = "home_type" // sort key

  attribute {
        name = "_id"
        type = "S"
      }
  attribute {
          name = "home_type"
          type = "S"
        }
}

resource "aws_dynamodb_table" "zwell_state_table" {
  name = "prod_zwell_state_table"
  billing_mode = "PAY_PER_REQUEST" // free < 1mil read/write ops/units... ALOT
  hash_key = "_id" // primary key
  range_key = "state" // sort key

  attribute {
        name = "_id"
        type = "S"
      }
  attribute {
          name = "state"
          type = "S"
        }
}