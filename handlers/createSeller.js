const store = require('./helpers/store')
const ULID = require('ulid')
let response;
exports.lambdaHandler = async (event) => {
    try {
        let seller = JSON.parse(event.body)
        seller.PK = "SELLER#" + ULID.ulid()
        seller.SK = "#SELLER#" + ULID.ulid()

        await store.putItem(seller)
        return {
            'statusCode': 200,
            'body': JSON.stringify(seller)
        };
    } catch (err) {
        console.log(err);
        return {
            'statusCode': 400,
            'body': JSON.stringify({ error: err.message })
        };
    }
};
