/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("./database");
const Address = require("../model/Address");

class AddressDAO {
    /**
     * Create new Address
     * @param address
     * @param userID
     * @param callback
     */
    create(address, userID, callback) {
        address.userID = userID;
        PersistenceProvider.connectDB(() => {
            Address.create(address, (error, results) => {
                callback(results);
                if (error) {
                    console.log('error occurred when creating new Address');
                    console.error(error);
                }
            })
        });
    }

    findByUserID(id, callback) {
        PersistenceProvider.connectDB(() => {
            Address.find({userID: id}, (error, addressList) => {
                if (addressList.length === 0) {
                    console.error('cannot find any address for users !')
                }
                if (error) {
                    console.log(error);
                }
                callback(addressList[0] ? addressList[0] : null);
            })
        });
    }

    updateAddress(id, address, callback) {
        PersistenceProvider.connectDB(() => {
            this.findByUserID(id, (found) => {
                if (!found) {
                    callback(null);
                    return;
                }
                _update(found, address);
                found.save((error) => {
                    if (error) {
                        console.log('cannot update user\'s address! ');
                        console.log(error);
                    }
                });
                callback(found);
            });
        });
    }
}

function _update(result, address) {
    result.streetNumber = address.streetNumber;
    result.streetName = address.streetName;
    result.postalCode = address.postalCode;
    result.city = address.city;
    result.complementaryAddress = address.complementaryAddress;
}

module.exports = new AddressDAO();