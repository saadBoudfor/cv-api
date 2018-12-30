const PersistenceProvider = require("../pesistence/database");
const Skill = PersistenceProvider.db.define('Skill', {
        name: String,
        score: String,
        color: String,
        userID: String
    });

module.exports = Skill;