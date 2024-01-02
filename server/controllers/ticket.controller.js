const ticket = require('../models/ticket.model')

// add a new ticket
module.exports.createTicket = (req, res) => {
    ticket.create(req.body).then(ticket => res.json(ticket))
        .catch(err => res.status(400).json(err))
}

// get all tickets
module.exports.getTickets = (req, res) => {
    ticket.find().then(tickets => res.json(tickets))
        .catch(err => res.status(400).json(err))
}

// delete one ticket 
module.exports.deleteTicket = (req, res) => {
    ticket.deleteOne({ _id: req.params.id })
        .then(() => res.json({ message: "deleted successfully" }))
        .catch(err => console.log('there was an error ', err))
}

// get ticket by Id 
module.exports.getTicket = (req, res) => {
    ticket.findOne({ _id: req.params.id })
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json(err))
}

// update one ticket 

module.exports.updateTicket = (req, res) => {
    ticket.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, })
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json(err))
}