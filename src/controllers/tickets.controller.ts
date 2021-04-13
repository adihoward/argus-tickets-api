import { Response, Request, NextFunction } from 'express';
import { AppRequest } from '../types/appRequset.type';
import { getAppServicesFromRequest } from '../utils/getServiceFromRequest.util';

const purchaseTickets = async (req: AppRequest, res: Response, next: NextFunction) => {
    try {
        const tickets = await getAppServicesFromRequest(req).ticketService.purchaseTicket();
        res.send(tickets);
    } catch (err) {
        next(err);
    }
}

const validateTicket = async (req: AppRequest, res: Response, next: NextFunction) => {
    try {
        const tickets = await getAppServicesFromRequest(req).ticketService.validateTicket();
        res.send(tickets);
    } catch (err) {
        next(err);
    }
}



export { validateTicket,  purchaseTickets};