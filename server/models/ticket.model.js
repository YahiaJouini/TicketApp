const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    priority: {
        type: Number
    },
    progress: {
        type: Number
    },
    status: {
        type: String
    },
    active: {
        type: Boolean
    }
},{timestamps:true})
module.exports = mongoose.model("ticketSchema", ticketSchema)