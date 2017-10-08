

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var mysql = require('mysql');


const app = express()

app.use(express.static('public'))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'bloodbank'	
});

	connection.connect(function(err){
	if(err) throw err;
		console.log("Database is connected");
});




app.post('/getTriageDetails',(req,res) => {
	console.log("api hit" + JSON.stringify(req.body));
	connection.query('INSERT INTO REGISTER SET ?', req.body, function(err,result){
		console.log('entry successful')
	});
	res.send({status : 'SUCCESS'})
})

app.listen(8080, () => {
  console.log('Server listening on port 8080, Ctrl+C to stop' )
});
