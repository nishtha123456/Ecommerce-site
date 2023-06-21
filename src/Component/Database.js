
  

   const express = require('express');
   var MongoClient = require('mongodb').MongoClient;
   var url = "mongodb://localhost:27017/mydb";
   var products=[]
    const app = express()
   
      const port = 5000
      cors = require("cors");
   
      app.use(cors());
      app.use(express.urlencoded({extended:true}))
app.use(express.json())

 /* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { id:1,name: "pen", Price:40,Quantity:4};
    dbo.collection("cart").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });*/
  app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
    
  })
  app.get('/student', async(req, res) => {
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("mydb");
      dbo.collection("student").find({}).toArray(function(err, result) {
    
        if (err) throw err;
        console.log(result);
        products=result;
      res.send(result)
         db.close();
       });
      
     })
   })
   app.post('/student',function(req,res){
    res.send("saved to database")
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("mydb");
      dbo.collection("student").insertMany(req.body, function(err, res) {
        if (err) throw err;
        console.log(" documents inserted");
        db.close();

   })
  })

  })
   
  app.get('/cart', async(req, res) => {
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("mydb");
      dbo.collection("cart").find({}).toArray(function(err, result) {
    
        if (err) throw err;
        console.log(result);
        products=result;
      res.send(result)
         db.close();
       });
      
     })
    //res.send('server get request')
  //res.send(products)  ;
   })
   app.post('/',async (req,res)=>{
   //req.body
    res.send('post request called')
    console.log(req.body)
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj =req.body;
      dbo.collection("cart").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(" documents inserted");
        db.close();
      });
    });
 
    })
    app.delete('/delete', (req, res) => {
      res.send("delete Request Called")
      console.log("data",req.body.id)

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj =req.body;
        dbo.collection("cart").deleteOne(req.body, function(err, res) {
          if (err) throw err;
          console.log(" documents deleted");
          db.close();
        });
      });
   
      


    })

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("cart1", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/