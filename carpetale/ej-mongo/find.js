let mongo = require("mongodb")
let client = mongo.mongoClient
const url = "mongodb://localhost:27017"
const dbName = "telmex"

client.connect(url, function (err, con) {
    if(err) console.log(err)
    console.log ("Connected succesfully to server")

    const db = con.db(dbName)
    db.collection("personas").insert({
        name:"Gustav",
        lastname:"Klimnt"
    }, function(err,data){
        console.log
    })
})

var MongoClient = require("mongodb").MongoClient;
var url =  "mongodb://localhost:27017";
MongoClient.connect(url, function(err,db){

    if(err) throw err;
    var dbo =db.db("mydb");
    var myobj = { name:"Painters", lastname:"Mexicans"};
    db.close();
    }


{    name:"José María", lastname:"Velasco",
name:"José Clemente", lastname:"Orozco",
name:"Diego", lastname:"Rivera",
name:"Dr.", lastname:"Atl",
name:"Dr.", lastname:"Lakra",
}
    ]
dbo.collection("customers").insertMany(myobj, function(err,res) {
    if (err) throw err;
    console.log("Numberof documents inserted: " + res.insertedCount);
    db.close();
})