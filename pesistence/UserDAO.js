/**
 * Created by sboudfor on 25/12/2018.
 */
const PersistenceProvider = require("./database");
const User = require("../model/User");

class UserDAO {
    /**
     * Create new User
     * @param user
     * @param callback
     */
    create(user, callback) {
        PersistenceProvider.connectDB(() => {
            user = updateBeforeCommit(user);
            User.create(user, (error, created) => {
                if (error) {
                    console.log('error occurred when creating new User');
                    console.error(error);
                }
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
            })
        })

    }

    findByUserName(username, callBack) {
        return User.find({userName: username}, (err, users) => {
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