const ticketController = require('../controllers/ticket.controller')
module.exports = (app) =>{
    app.post("/api/ticket/new", ticketController.createTicket)
    app.get("/api/tickets",ticketController.getTickets)
}