const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

app.use(cors())

var con = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "zawodowe"

})

con.connect(function(err){

    if(err) console.log(err)
    console.log("Połączono")
})

app.get("/todo/:nazwa/:wyko/:termin",function(req,res){

    const nawza = req.params.nazwa
    const wykonanie = req.params.wyko
    const termin = req.params.termin


    const sql = `INSERT INTO todo (nazwa,czy_wykonane,termin) VALUES ('${nawza}','${wykonanie}','${termin}')`

    con.query(sql, function(err,result,fields){

        if(err){

            console.log(err)
            res.send("nie dodano")
        }
        else res.send("dodano")
    })

})

app.get("/delete/:id",function(req,res){
    const id = req.params.id

    const sql = `DELETE FROM todo WHERE id = '${id}'`

    con.query(sql, function(err,result,fields){

        if(err){
            console.log(err)
            res.send("nie usunięto")
        }
        else res.send("usunięto")
    })
})

app.get("/select",function(req,res){

    const sql = `SELECT * FROM todo `
    con.query(sql, function(err,result,fields){

    if(err) console.log(err)
    res.send(result)
    console.log(fields)

    })

})

app.get("/change/:id",function(req,res){

    const id=req.params.id
    
    const sql = `UPDATE todo SET czy_wykonane = '1' WHERE todo.id = '${id}';`
    con.query(sql, function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
        console.log(fields)
    })
    
})
app.get("/change1/:id",function(req,res){

    const id=req.params.id
    
    const sql = `UPDATE todo SET czy_wykonane = '0' WHERE todo.id = '${id}';`
    con.query(sql, function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
        console.log(fields)
    })
    
})

app.listen(3000)