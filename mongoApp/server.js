'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let async=require('async')
let contactSchema = require('./contactSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/contacts', (request, response) => {
  let contactId = request.params.id;
  let contact=contactSchema.contact;
  contact.find({},function(err,result){ 
    if(err){
      console.log("Error")
      response.status(404).json({ message: 'Contact not found' });
    }else if(!result){
      response.json({"message":"No contact found"});
    }else{
      console.log("Connected")
      console.log(result.length)
      response.json(result);
    }
  });
});

app.get('/api/contacts/:id', (request, response) => {
  let contactId = request.params.id;
  let contact=contactSchema.contact;
  contact.findOne({"id":parseInt(contactId)},function(err,result){ 
    console.log("contact-",JSON.stringify(result))
    if(err){
      console.log("Error")
      response.status(404).json({ message: 'Contact not found' });
    }else if(!result){
      response.json({"message":"No contact found"});
    }else{
      console.log("Connected")
      console.log(result.length)
      response.json(result);
    }
  });
});

app.post('/api/contacts', (request, response) => {
  let contact=contactSchema.contact;

  let data = {
    id:request.body.id,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    website: request.body.website
  };
  
  let contactId = request.body.id;

  let isExist=false;
  async.series([
    function(callback){
      contact.findOne({"id":parseInt(contactId)},function(err,result){
        if(err){
          console.log("Error")
          callback("Error while searching data");
        }else if(!result){
          callback();
        }else{
          isExist=true;
          callback("allready Exist")
        }
      });
    },function(callback){
      let d=contact(data)
      d.save(function(err,res){ 
        if(err){
          callback("Error while adding data")
        }else{
          console.log("Added succesfully")
          callback()
        }
      });
    }
  ],function(err,done){
    if(err){
      console.log(JSON.stringify(err));
      response.json({ message: err });
    }else{
      response.json(data);
    }
  })
});

app.put('/api/contacts/:id', (request, response) => {
  let contact=contactSchema.contact;
 
  let data = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    website: request.body.website
  };
  
  let contactId = request.params.id;

  async.series([
    function(callback){
      contact.findOne({"id":parseInt(contactId)},function(err,result){
        if(err){
          callback("Error while searching data");
        }else if(!result){
          callback("Contact Not found");
        }else{
          callback()
        }
      });
    },function(callback){
      contact.update({"id":parseInt(contactId)},{$set : data},function(err,response){ 
        if(err){
          callback("Error while updating data")
        }else{
          console.log("Updated succesfully")
          callback()
        }
      });
    }
  ],function(err,done){
    if(err){
      console.log("Error--")
      console.log(JSON.stringify(err));
      response.json({ message: err });
    }else{
      console.log("Done")
      response.json(data);
    }
  })
});

app.delete('/api/contacts/:id', (request, response) => {
  let contact=contactSchema.contact;  
  let contactId = request.params.id;

  async.series([
    function(callback){
      contact.findOne({"id":parseInt(contactId)},function(err,result){
        if(err){
          console.log("Error")
          callback("Error while searching data");
        }else if(!result){
          callback("Contact Not found");
        }else{
          callback()
        }
      });
    },function(callback){
      contact.remove({"id":parseInt(contactId)},function(err,response){ 
        if(err){
          callback("Error while removing data")
        }else{
          console.log("Removed succesfully")
          callback()
        }
      });
    }
  ],function(err,done){
    if(err){
      console.log(JSON.stringify(err));
      response.json({ message: err });
    }else{
      console.log("Done")
      response.json({"message":"Removed successfully"});
    }
  })

});

const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);
  
});
