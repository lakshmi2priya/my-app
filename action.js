var ApiService = require('./service.js');


var ApiActions = function (app) {
    this.app = app;
    this.apiServiceInstance = new ApiService(app);
};

module.exports = ApiActions;

ApiActions.prototype.testInformation = function (req, callback) {
   console.log("enter")
    var self = this;
    var resObject = {};
    var errorResponseObj = {
        status: false,
        statuscode: 204,
        data: {}
    };

    var req=req.query;

    var tableName = "girls";
    self.apiServiceInstance.find(req,{},tableName, function (err, result) {
        if (result == false) {
            callback(err, errorResponseObj)
        } else {
           console.log("bo",result)
            var object=[{startDate:"2019-06-26"}]
            var startDate=object[0].startDate
            resObject['status'] = true;
            resObject['data'] = result;
            callback(err, resObject)
        }
    });
};

ApiActions.prototype.getList = function (req) {

    var self = this;
    return new Promise(function(resolve,reject) {


        var requestObject = {}

        var emptyResponse = {
            status: false,
            data: []
        };
console.log("action2")
        self.apiServiceInstance.findWithoutCallBack({}, {}, 'girls')
            .then(function(data){
                console.log("data",data)

                if (data == false) {
                    reject(emptyResponse)
                }else{
                    var object=[]
                    var startDate=object[0].startDate
                    resolve(data);
                }
            })
            .catch(function(error){
                reject(error);
            });
    })
};
