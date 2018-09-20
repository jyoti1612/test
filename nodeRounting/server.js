let express = require('express');
let _ = require("underscore");

const router = express.Router();
let app = express();
let data = require('./sample');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let mongojs = require('mongojs');
let db = mongojs("qliktag")
let contacts = db.collection('contacts')

router.get('/', function(req, res) {
    contacts.find({}, function(err, data) {
        if (err) {
            res.send("Error while fetching data");
        } else {
            if (data) {
                res.send(data)
            } else {
                res.send("No active record found");
            }
        }
    })
})

router.post('/', function(req, res) {
    let contactObj = req.body;
    let email = req.body.email;
    contacts.find({ email: email }, function(err, data) {
        if (err) {
            res.send("Error while fetching contacts");
        } else {
            if (data && data.length > 0) {
                res.send("Email already exist");
            } else {
                contacts.insert(contactObj, function(error, response) {
                    if (error) {
                        res.send("Error while inserting contact");
                    } else {
                        // res.text("Contact Added successfully");
                        res.json(contactObj)
                    }
                })
            }
        }
    })
})

router.put('/:email', function(req, res) {
    let contactObj = req.body;
    let email = req.params.email;
    contacts.find({ email: email }, function(err, data) {
        if (err) {
            res.send("Error while fetching contacts");
        } else {
            if (data && data.length > 0) {
                contacts.update({ email: email }, { $set: contactObj }, function(error, response) {
                    if (error) {
                        res.send("Error while inserting contact");
                    } else {
                        let obj = _.extend(data, contactObj);
                        // res.text("Contact Added successfully");
                        res.json(obj)
                    }
                })
            } else {
                res.send("No active record found to update");
            }
        }
    })
})

router.delete('/:email', function(req, res) {
    let email = req.params.email;
    contacts.find({ email: email }, function(err, data) {
        if (err) {
            res.send("Error while fetching contacts");
        } else {
            if (data && data.length > 0) {
                contacts.remove({ email: email }, function(error, response) {
                    if (error) {
                        res.send("Error while deleting contact");
                    } else {
                        res.send("Contact deleted successfully");
                    }
                })
            } else {
                res.send("No active record found to delete");
            }
        }
    })
})

app.use('/', router);

let port = 3001;
let hostName = "localhost";

app.listen(3001, "localhost", function() {
    console.log("App listening at: localhost:3001")
})