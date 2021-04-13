import { TicketService } from "../server/tickets.service";
import { AppServices } from "../types/appServices.type";


export const initializeServices = async () => {
    try {
        const appServices: Partial<AppServices> = {};
        appServices.ticketService = new TicketService();
        
        return appServices as AppServices;
    } catch (err) {
        throw err;
    }
}