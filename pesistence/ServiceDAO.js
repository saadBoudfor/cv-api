const PersistenceProvider = require("./database");
const Logger = require("../shared/Logger");
const Service = require('../model/Service');

class ServiceDAO {
    create(userID, service, callback) {
        service.userID = userID;
        PersistenceProvider.connectDB(() => {
            Service.create(service, (error, created) => {
                if (!error) {
                    callback(created);
                    Logger.debugg(['Creating new Service\n', service], 'Service');
                    return;
                }
                Logger.error(['failed to create new Service\n', error], 'Service');
                callback(null);
            })
        });
    }

    delete(id, callback) {
        PersistenceProvider.connectDB(() => {
            Service.find({id: id}).remove(error => {
                if (!error) {
                    callback({serviceDeleted: id});
                    Logger.debugg(['deleting Service with id:', id, '\n'], 'Service');
                    return;
                }
                Logger.error(['failed to delete Service with id: ' + id + '.', '\n', error], 'Service');
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
                        Logger.debugg(['Updating Service: ', "\n", service], 'Service');
                        return;
                    }
                    Logger.error(['failed to update Service: ', '\n', error], 'Service');
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
                    Logger.debugg(['Getting Service from data base: ', "\n", result], 'Service');
                    return;
                }
                callback(null);
                Logger.error(['Getting Service from data base failed: ', "\n", error], 'Service');
            })
        })
    }

}

module.exports = new ServiceDAO();