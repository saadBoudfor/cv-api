const PersistenceProvider = require("./database");
const Service = require('../model/Service');

class ServiceDAO {
    create(userID, service, callback) {
        service.userID = userID;
        PersistenceProvider.connectDB(() => {
            Service.create(service, (error, created) => {
                if (!error) {
                    callback(created);
                    return;
                }
                callback(null);
            })
        });
    }

    delete(id, callback) {
        PersistenceProvider.connectDB(() => {
            Service.find({id: id}).remove(error => {
                if (!error) {
                    callback({serviceDeleted: id});
                    return;
                }
                callback(null);
            })
        })
    }

    update(service, callback) {
        PersistenceProvider.connectDB(() => {
            Service.find({id: service.id}, (error, result) => {
                result[0].save({
                    name: service.name,
                    university: service.university,
                    icon: service.icon,
                    start: service.start,
                    end: service.end
                }, error => {
                    if (!error) {
                        callback(result[0]);
                        return;
                    }
                    callback(null);
                })
            })
        })
    }

    findByUserID(userID, callback) {
        PersistenceProvider.connectDB(() => {
            Service.find({userID: userID}, (error, result) => {
                if (!error) {
                    callback(result);
                    return;
                }
                callback(null);
            })
        })
    }

}

module.exports = new ServiceDAO();