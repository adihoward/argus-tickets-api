import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { ClientError } from "../errors/client.error";
import ticketsRouter from "../routes/tickets.route";
import { AppServices } from "../types/appServices.type";

export const initializeServer = (appServices: AppServices) => {
    const app = express()

    const corsOptions = {
        origin: '*'
    }

    app.locals.services = appServices;
    app.use(cors(corsOptions));
    app.use(express.json());

    app.get('/', (req, res) => { res.send('Welcome to Tickets API'); });
    app.use('/tickets', ticketsRouter);

    app.use((err, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof ClientError) {
            console.log(`Client Error: ${err.message}`)
            res.status(err.statusCode).json(err);
        } else {
            res.status(500).json("There's been a server error");
            console.error(err);
        }
    });

    return app;
}