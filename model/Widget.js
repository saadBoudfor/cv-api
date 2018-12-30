const PersistenceProvider = require("../pesistence/database");

const Widget = PersistenceProvider.db.define('Widget', {
    name: String,
    image: String,
    isEnabled: Boolean,
    anchor: String,
    title: String,
    icon: String,
    userID: String,
});

module.exports = Widget;

