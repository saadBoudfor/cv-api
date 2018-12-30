const PersistenceProvider = require("../pesistence/database");

const Experience = PersistenceProvider.db.define('Experience', {
        userID: String,
        job: String,
        company: String,
        start: String,
        end: String,
        img: String,
    });

module.exports = Experience;