const PersistenceProvider = require("../pesistence/database");
const Service = PersistenceProvider.db.define('Service', {
        name: String,
        url: String,
        description: {type: 'text', size: 10000},
        userID: String
    });

module.exports = Service;