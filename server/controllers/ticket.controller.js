const ticket = require('../models/ticket.model')

// add a new ticket
module.exports.createTicket = (req, res) => {
    ticket.create(req.body).then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// get all tickets
module.exports.getTickets = (req,res) => {
    ticket.find().then(tickets=>res.json(tickets))
    .catch(err => res.status(400).json(err))
}