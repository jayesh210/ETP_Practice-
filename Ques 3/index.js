var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/detail";
MongoClient.connect(url, {
    useUnifiedTopology: true
}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("detail");
    var myobj = [{
            name: 'Manoj',
            course: 'Node js',
            marks: 98,
            Grade: 'O',
            Mode: 'Regular'
        },
        {
            name: 'Dhoni',
            course: 'Node js',
            marks: 98
        },
        {
            name: 'Anu',
            course: 'React js',
            marks: 98
        },
        {
            name: 'Ram',
            course: 'HTML',
            marks: 98
        },
        {
            name: 'Tej',
            course: 'Angular js',
            marks: 98
        },
    ];
    dbo.collection("User_data").insertMany(myobj, function (err, data) {
        if (err) throw err;
        console.log("Number of documents inserted: " + data.insertedCount);
        db.close();
    });
});