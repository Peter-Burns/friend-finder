
var friendArr = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendArr);
    });

    app.post('/api/friends', function (req, res) {
        friendArr.push(req.body);
        res.json(true);
    });
};