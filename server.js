const express = require('express');
const path = require ('path');
const xlsx = require("xlsx");
const cors = require('cors');
const fs = require("fs");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '/index.html'));

// });

app.get('/average-answers', function(req, res) {
    const wb = xlsx.readFile('./answers.xlsx');
    const ws = wb.Sheets['Mean'];
    const data = xlsx.utils.sheet_to_json(ws);
    res.json(data);
});

app.post('/save-answers', function(req, res){
    const wb = xlsx.readFile('./answers.xlsx');
    let ws = wb.Sheets['Questions'];
    const data = xlsx.utils.sheet_to_json(ws);
    const content = req.body;
    //console.log(content);
    //console.log(data);
    data.push(content);
    console.log(data);
    //let newWB = xlsx.utils.book_new();
    //let newWS = xlsx.utils.json_to_sheet(data);
    //xlsx.utils.book_append_sheet(newWB,newWS, "newdata");
    //xlsx.writeFile(newWB, "newExcel.xlsx");
    ws = xlsx.utils.json_to_sheet(data);
    wb.Sheets['Questions']= ws;
    xlsx.writeFile(wb, './answers.xlsx'); 
    res.send('ok'); 
});


app.listen(3000);


