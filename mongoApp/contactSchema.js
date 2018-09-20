const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  id:{type:Number},
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true }
});

mongoose.connect("mongodb://localhost/qliktag");
var contact = mongoose.model('contacts', ContactSchema);
exports.contact = contact;














// const data = [
//   {
//     "id": 1,
//     "first_name": "Ryan",
//     "last_name": "Chenkie",
//     "email": "ryan@scotch.io",
//     "website": "http://ryanchenkie.com"
//   },
//   {
//     "id": 2,
//     "first_name": "Chris",
//     "last_name": "Sevilleja",
//     "email": "chris@scotch.io",
//     "website": "http://scotch.io"
//   },
//   {
//     "id": 3,
//     "first_name": "Nick",
//     "last_name": "Cerminara",
//     "email": "nick@scotch.io",
//     "website": "http://scotch.io"
//   },
//   {
//     "id": 4,
//     "first_name": "Ado",
//     "last_name": "Kukic",
//     "email": "ado@scotch.io",
//     "website": "http://scotch.io"
//   },
//   {
//     "id": 5,
//     "first_name": "Holly",
//     "last_name": "Lloyd",
//     "email": "holly@scotch.io",
//     "website": "http://scotch.io"
//   }
// ];

// module.exports = data;