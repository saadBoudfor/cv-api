const PersistenceProvider = require("./database");
const Experience = require('../model/Experience');

class ExperienceDAO {
    create(userID, Experience, callback) {
        Experience.userID = userID;
        PersistenceProvider.connectDB(() => {
            Experience.create(Experience, (error, created) => {
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
            Experience.find({id: id}).remove(error => {
                if (!error) {
                    callback({ExperienceDeleted: id});
                    return;
                }
                callback(null);
            })
        })
    }

    update(Experience, callback) {
        PersistenceProvider.connectDB(() => {
            Experience.find({id: id}, (error, result) => {
                result[0].save({
                    job: Experience.job,
                    company: Experience.company,
                    img: Experience.img,
                    start: Experience.start,
                    end: Experience.end
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
            Experience.find({userID: userID}, (error, result) => {
                if (!error) {
                    callback(result);
                    return;
                }
                callback(null);
            })
        })
    }

}

module.exports = new ExperienceDAO();