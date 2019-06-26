var Action = require('./action.js');
var Promise = require('promise');

var UIRoutes = function(app) {

    this.app = app;

    this.actionInstance = new Action(app);
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function() {
    var self = this;
    var app = this.app;


    app.get('/testInformation', function (req, res) {
        self.actionInstance.testInformation(req, function (err, result) {
            res.json(result);
        })

    });

    app.post("/getList", function(req, res){
        console.log("dd")
        self.actionInstance.getList(req)
            .then(function(data){
                res.json(data);
            })
            .catch(function(error){
                res.json(error);
            });
    });


}

