const PersistenceProvider = require("./database");
const Skill = require('../model/Skill');

class SkillDAO {
    create(userID, skill, callback) {
        Skill.userID = userID;
        PersistenceProvider.connectDB(() => {
            skill.create(skill, (error, created) => {
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
            Skill.find({id: id}).remove(error => {
                if (!error) {
                    callback({skillDeleted: id});
                    return;
                }
                callback(null);
            })
        })
    }

    update(skill, callback) {
        PersistenceProvider.connectDB(() => {
            Skill.find({id: skill.id}, (error, result) => {
                result[0].save({
                    name: skill.name,
                    university: skill.university,
                    icon: skill.icon,
                    start: skill.start,
                    end: skill.end
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
            Skill.find({userID: userID}, (error, result) => {
                if (!error) {
                    callback(result);
                    return;
                }
                callback(null);
            })
        })
    }

}

module.exports = new SkillDAO();