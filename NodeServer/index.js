const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static(__dirname + '/html'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/temp',(req, res)=>{
    res.statusCode = 200;
    res.send({"status":"estoy bien"})
    
})

app.post('/', (req, res)=>{
    let tempTime = req.body.time;
    let timeSplit = tempTime.split(" ");
    let day = timeSplit[0].replace(',','');
    let month = timeSplit[1];
    let dayM = timeSplit[2];
    let year = timeSplit[3];
    let hour = timeSplit[4];
    let min = timeSplit[5];
    let sec = timeSplit[6];
    console.log(tempTime)
    res.send({"day":day,
    "month":month,
    "day of month":dayM,
    "year":year,
    "hour":hour,
    "minute":min,
    "second":sec
})
})


app.listen(8080 , function(){
    console.log('app is running in http://localhost:8080')
})


