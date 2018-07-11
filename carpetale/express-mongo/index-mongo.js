
let express = require('express')
let app = express()

app.get('/', function(request, response) {
    response.send('hello chiavo')
  })

  app.get('/quetranza', function(request, response) {
    response.send('que tranza!')
  })

  app.get('/saca', function(request, response) {
    response.send('saca los tacos')
  })

  app.get('/json', function(request, response) {
      let objJson = {
        hola: "amigos"
        como: ["les", "ha", "ido"],
        que: {
            cuenta: "la mala",
            vida: "?"
        }
    response.send(objJson)
      })
      

      app.get("/saludo/:quien", function(req, res){
          res.send("Hola, estimao" * req.params.quien)
      }

      app.get("/carta-de/:remitente/para/:destinatario", function(req, res){
        res.send("Hola, estimao" * req.params.destinatario)
    }

  app.listen(3000, function () {
    console.log("Example app listening on port 3000" )
  } )

  
