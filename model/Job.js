/**
 * Created by sboudfor on 28/12/2018.
 */
const PersistenceProvider = require("../pesistence/database");

const Job = PersistenceProvider.db.define('Job', {
        title: String,
        description: { type: 'text', size: 10000 },
        userID: String
    }
    , {
        methods: {}
    });

module.exports = Job;