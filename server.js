const express = require('express');
const path = require ('path');
const xlsx = require("xlsx");
const cors = require('cors');
const fs = require("fs");
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '/index.html'));

// });

const uri = "mongodb+srv://demo:demo123@cluster0.gcne8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function main(data){
   
    try {
        // Connect to the MongoDB cluster
        await  client.connect();
        await insertAnswer(client,data);
    } catch (e) {
        console.error(e);
    } finally {
       // await insertAnswer(client,data);
         //await client.close();
    }
};

app.post('/save-answers', function(req, res){
    const content = req.body;
    const obj = Object.assign({}, content);
    main(obj);
    res.send('ok'); 
});

 async function insertAnswer(client, newAnswer){
    const result = await client.db("Qbility").collection("Answers").insertOne(newAnswer);
    console.log(`inserido`);
};


app.get('/send-info',async function(req, res){
    const average = await client.db("Qbility")
                        .collection("Answers")
                        .aggregate([
                            { $group: {_id: null, q1Avg: { $avg: "$Q1"}, q2Avg: { $avg: "$Q2"}, q3Avg: { $avg: "$Q3"}, q4Avg: { $avg: "$Q4"}, q5Avg: { $avg: "$Q5"}, q6Avg: { $avg: "$Q6"}, q7Avg: { $avg: "$Q7"}, q8Avg: { $avg: "$Q8"}, q9Avg: { $avg: "$Q9"}, q10Avg: { $avg: "$Q10"}, q11Avg: { $avg: "$Q11"}, q12Avg: { $avg: "$Q12"}, q13Avg: { $avg: "$Q13"}, q14Avg: { $avg: "$Q14"}, q15Avg: { $avg: "$Q15"}, q16Avg: { $max: "$Q16"} } } 
                        ]);
    var Results = [];
    
    await average.forEach(average => {
    Results.push(average)
    }); 

    const max = await client.db("Qbility")
                        .collection("Answers")
                        .aggregate([
                            { $group: {_id: null, q1Max: { $max: "$Q1"}, q2max: { $max: "$Q2"}, q3max: { $max: "$Q3"}, q4max: { $max: "$Q4"}, q5max: { $max: "$Q5"}, q6max: { $max: "$Q6"}, q7max: { $max: "$Q7"}, q8max: { $max: "$Q8"}, q9max: { $max: "$Q9"}, q10max: { $max: "$Q10"}, q11max: { $max: "$Q11"}, q12max: { $max: "$Q12"}, q13max: { $max: "$Q13"}, q14max: { $max: "$Q14"}, q15max: { $max: "$Q15"}, q16max: { $max: "$Q16"} } } 
                        ])
    await max.forEach(max => {
        Results.push(max)
        }); 
   // console.log(Results);
    res.json(Results); 
});

                     
                        

app.listen(3000);


//get average and save new answers to an excel file (not working because questions name doesnt match with the excel column name anymore)
/* app.get('/average-answers', function(req, res) {
    const wb = xlsx.readFile('./answers.xlsx');
    const ws = wb.Sheets['Mean'];
    const data = xlsx.utils.sheet_to_json(ws);
    res.json(data);
    
});

app.post('/save-answers', function(req, res){
    const wb = xlsx.readFile('./answers.xlsx');
    let ws = wb.Sheets['Questions'];
    data = xlsx.utils.sheet_to_json(ws);
    const content = req.body;
    data.push(content);
    //let newWB = xlsx.utils.book_new();
    //let newWS = xlsx.utils.json_to_sheet(data);
    //xlsx.utils.book_append_sheet(newWB,newWS, "newdata");
    //xlsx.writeFile(newWB, "newExcel.xlsx");
    ws = xlsx.utils.json_to_sheet(data);
    wb.Sheets['Questions']= ws;
    xlsx.writeFile(wb, './answers.xlsx'); 
    const obj = Object.assign({}, content);
    main(obj);
    res.send('ok'); 
}); */