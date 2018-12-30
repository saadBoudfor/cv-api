/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("./database");
const User = require("../model/User");
const Login = require("../model/Login");

class UserDAO {
    /**
     * Create new User
     * @param resume
     * @param callback
     */
    create(resume, callback) {
        PersistenceProvider.connectDB(() => {
            resume.user = updateBeforeCommit(resume.user);
            User.create(resume.user, (error, created) => {
                if (!error) {
                    Login.create({userName: resume.user.userName, password: resume.password}, (err, cre) => {
                        callback({
                            firstName: created.firstName,
                            lastName: created.lastName,
                            profileID: created.profileID,
                            userName: created.userName,
                            createdTime: created.createdTime,
                            phone: created.phone,
                            profile: created.profile,
                            id: created.id
                        });
                    });
                    return;
                }
                callback(null);
            })
        })

    }

    findByUserID(id, callBack) {
        return User.find({id: id}, (err, users) => {
            callBack(users);
        });
    }
}

function updateBeforeCommit(user) {
    user.createdTime = new Date();
    user.userName = user.firstName.charAt(0).toLowerCase() + user.lastName.toLowerCase();
    return user;
}

module.exports = UserDAO;