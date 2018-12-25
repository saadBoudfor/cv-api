/**
 * Created by sboudfor on 25/12/2018.
 */
const orm = require("orm");

class PersistenceProvider {
    constructor() {
        this.db =  orm.connect("mysql://sboudfor:root@localhost:3030/mycv");
    }
    connectDB(callback) {
        this.db.sync((error) => {
            if (error) console.log('error occurred when connecting to db');
            callback();
        })
    }
}


module.exports = new PersistenceProvider();