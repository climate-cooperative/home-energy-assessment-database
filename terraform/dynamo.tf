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