const ticketController = require('../controllers/ticket.controller')
module.exports = (app) =>{
    app.post("/api/ticket/new", ticketController.createTicket)
    app.get("/api/tickets",ticketController.getTickets)
    app.delete("/api/delete/:id",ticketController.deleteTicket)
    app.get("/api/tickets/:id",ticketController.getTicket)
    app.patch("/api/tickets/:id",ticketController.updateTicket)
}