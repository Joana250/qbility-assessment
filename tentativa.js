// Requiring module
const { Int32 } = require('bson');
const mongoose = require('mongoose');
  
// Connecting to database
mongoose.connect('mongodb://localhost:27017/Qbility',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
  
// Schema of answers collection
const answersSchema = new mongoose.Schema({
    Q1: Number,
    Q2: Number,
    Q3: Number,
    Q4: Number,
    Q5: Number,
    Q6: Number,
    Q7: Number,
    Q8: Number,
    Q9: Number,
    Q10: Number,
    User: String
})
  
// Model of anwers collection
const Employee = mongoose.model(
        'answers', answersSchema)
  
// Group employees by department field
// and computing total no. of employees
// and average salary in each department
Employee.aggregate([
    {
        $group:
        {
            _id: null,
            averageq1: { $avg1: "$q1" },
            averageq2: { $avg2: "$q2" }
        }
    }
])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })