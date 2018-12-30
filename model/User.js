/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("../pesistence/database");

const User = PersistenceProvider.db.define('User', {
        firstName: String,
        lastName: String,
        phone: String,
        profile: String,
        profileID: String,
        createdTime: String,
        userName: String,
        email: String
    });

module.exports = User;