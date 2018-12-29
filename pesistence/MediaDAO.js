const PersistenceProvider = require("./database");
const Media = require('../model/Media');

class MediaDAO {
    create(userID, media, callback) {
        PersistenceProvider.connectDB(() => {
            media.userID = userID;
            Media.create(media, (error, result) => {
                if (error) {
                    callback(null);
                    return;
                }
                callback(result);
            });
        });
    }

    findByUserID(userID, callback) {
        PersistenceProvider.connectDB(() => {
            Media.find({userID: userID}, (error, result) => {
                if (error) {
                    callback(null);
                    return;
                }
                callback(result);
            })
        })
    }

    update(media, callback) {
        PersistenceProvider.connectDB(() => {
            Media.find({id: media.id}, (error, result) => {
                result[0].save({url: media.url}, (error) => {
                    if (error) {
                        console.error(error);
                        callback(null);
                    }
                    console.log('media saved: ', result[0]);
                    callback(result[0]);
                })
            })
        })
    }

    delete(media, callback) {
        PersistenceProvider.connectDB(() => {
            Media.find({id: media.id}).remove((error) => {
                if (error) {
                    console.error(error);
                    callback(null);
                }
                callback({deleted: media.id});
            });
        })
    }
}

module.exports = new MediaDAO();