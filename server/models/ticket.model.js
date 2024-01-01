const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model("ticketSchema", ticketSchema)