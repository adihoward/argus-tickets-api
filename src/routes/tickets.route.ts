import { Router } from "express";
import { purchaseTickets, validateTicket } from "../controllers/tickets.controller";

const ticketsRouter = Router();

ticketsRouter.post('/', purchaseTickets);
ticketsRouter.get('/validate', validateTicket);


export default ticketsRouter;