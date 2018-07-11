let mongo = require("mongodb")
let client = mongo.mongoClient
const url = "mongodb://localhost:27017"
const dbName = "telmex"

client.connect(url, function (err, con) {
    if(err) console.log(err)
    console.log ("Connected succesfully to server")

    const db = con.db(dbName)
    db.collection("personas").insert({
        name:"Pablo",
        lastname:"Picasso"
    }, function(err,data){
        console.log
    })
})
