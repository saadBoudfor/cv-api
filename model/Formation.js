const PersistenceProvider = require("../pesistence/database");

const Formation = PersistenceProvider.db.define('Formation', {
        userID: String,
        name: String,
        university: String,
        icon: String,
        start: String,
        end: String,
    }
    , {
        methods: {}
    });

module.exports = Formation;