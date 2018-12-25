/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("./database");
const Address = require("../model/Address");

class AddressDAO {
    /**
     * Create new Address
     * @param address
     */
    create(address) {
        PersistenceProvider.connectDB(() => {
            Address.create(address, (error, results) => {
                console.log('error occurred when creating new Address');
                console.log(results);
                if (error) console.error(error);
            })
        });
    }
}

module.exports = AddressDAO;