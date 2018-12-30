const PersistenceProvider = require("../pesistence/database");

const Login = PersistenceProvider.db.define('Login', {
        userName: String,
        password: { type: 'text', size: 10000 }
    }
    , {
        methods: {}
    });

module.exports = Login;