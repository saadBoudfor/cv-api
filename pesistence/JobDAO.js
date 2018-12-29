/**
 * Created by sboudfor on 28/12/2018.
 */
const PersistenceProvider = require("./database");
const Job = require('../model/Job');

class JobDAO {
    create(userID, job, callBack) {
        job.userID = userID;
        PersistenceProvider.connectDB(() => {
            Job.create(job, (error, result) => {
                callBack(result);
                if (error) {
                    console.error(error);
                    callBack(null);
                }
            })
        });
    }

    findByUserID(userID, callBack) {
        PersistenceProvider.connectDB(() => {
            Job.find({userID: userID}, (error, result) => {
                if (result.length === 0 || error) {
                    callBack(null);
                    console.error('job not found');
                    return;
                }
                callBack(result ? result : null);
            });
        })
    }

    update(job, callBack) {
        this.findByUserID(job.userID, (found) => {
            if (!found) {
                callBack(null);
                return;
            }
            this._updateJob(found, job);
            found.save(error => {
                console.log(error);
            });
            callBack(found);
        })
    }

    _updateJob(found, job) {
        found.title = job.title;
        found.description = job.description;
    }
}

module.exports = new JobDAO();