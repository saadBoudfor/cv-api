/**
 * Created by sboudfor on 28/12/2018.
 */
const PersistenceProvider = require("../pesistence/database");

const Media = PersistenceProvider.db.define('Media', {
        name: String,
        url: String,
        userID: String
    }
    , {
        methods: {}
    });

module.exports = Media;