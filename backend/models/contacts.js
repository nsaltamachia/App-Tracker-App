const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;