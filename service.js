var Service = function (app) {
    this.app = app;

};
module.exports = Service;
Service.prototype.find = function (Condition,projection,tableName,callback) {
    var self = this;
    var db = self.app.db;
        var collection = db.collection(tableName);
        collection.find(Condition, projection).toArray(function (err, user) {
            if (user == null) {
                callback(null,err)
            }
            if (user) {
                callback(null,user)
            }
        });
};


Service.prototype.findWithoutCallBack = function (Condition,projection,tableName) {

    console.log("findWithoutCallBack")
    var self = this;
    return new Promise(function(resolve,reject) {

        var db = self.app.db;
          var collection = db.collection(tableName);
        console.log("service",tableName)
        //collection.find({},{})
        collection.find(Condition,projection).toArray(function (err, data) {

            console.log("@@@")

            if (data == false) {
                reject(data)
            } else {
                resolve(data)
            }
        })

    })
}
