var friendArr = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendArr);
    });

    app.post('/api/friends', function (req, res) {
        var bestMatch;
        var leastDiff = 100; 
        var newFriend = typeof(req.body.scores) == 'string' ? JSON.parse(req.body.scores) : req.body.scores;
        friendArr.forEach(function(friend){
            var difference = newFriend.map(function(val, ind){
                return Math.abs(val-friend.scores[ind]);
            }).reduce(function(a,b){
                return a+b;
            });
            if(leastDiff > difference){
                leastDiff = difference;
                bestMatch = friend;
            }
        });
        friendArr.push(newFriend);
        res.json(bestMatch);
    });
};