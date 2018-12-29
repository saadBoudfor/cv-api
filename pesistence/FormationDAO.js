const PersistenceProvider = require("./database");
const Formation = require('../model/Formation');

class FormationDAO {
    create(userID, formation, callback) {
        formation.userID = userID;
        PersistenceProvider.connectDB(() => {
            Formation.create(formation, (error, created) => {
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
            Formation.find({id: id}).remove(error => {
                if (!error) {
                    callback({formationDeleted: id});
                    return;
                }
                callback(null);
            })
        })
    }

    update(formation, callback) {
        PersistenceProvider.connectDB(() => {
            Formation.find({id: formation.id}, (error, result) => {
                result[0].save({
                    name: formation.name,
                    university: formation.university,
                    icon: formation.icon,
                    start: formation.start,
                    end: formation.end
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
            Formation.find({userID: userID}, (error, result) => {
                if (!error) {
                    callback(result);
                    return;
                }
                callback(null);
            })
        })
    }

}

module.exports = new FormationDAO();