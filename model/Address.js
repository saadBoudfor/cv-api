/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("../pesistence/database");

const Address = PersistenceProvider.db.define('Address', {
        streetNumber: String,
        streetName: String,
        complementaryAddress: String,
        postalCode: String,
        city: String,
        country: String,
        userID: String,
    }
    , {
        methods: {}
    });

module.exports = Address;