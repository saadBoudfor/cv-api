/**
 * Created by sboudfor on 28/12/2018.
 */
const PersistenceProvider = require("./database");
const Widget = require('../model/Widget');

class WidgetDAO {
    create(userID, widget, callBack) {
        widget.userID = userID;
        PersistenceProvider.connectDB(() => {
            Widget.create(widget, (error, result) => {
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
            Widget.find({userID: userID}, (error, result) => {
                if (result.length === 0 || error) {
                    callBack(null);
                    console.error('widget not found');
                    return;
                }
                callBack(result ? result : null);
            });
        })
    }

    update(widget, callBack) {
        this.findByUserID(widget.userID, (found) => {
            if (!found) {
                callBack(null);
                return;
            }
            this._updateWidget(found, widget);
            found.save(error => {
                console.log(error);
            });
            callBack(found);
        })
    }

    _updateWidget(found, widget) {
        found.name = widget.name;
        found.image = widget.image;
        found.isEnabled = widget.isEnabled;
        found.anchor = widget.anchor;
        found.title = widget.title;
        found.icon = widget.icon;

    }
}

module.exports = new WidgetDAO();