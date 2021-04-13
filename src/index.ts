import { config } from 'dotenv';
config();
import { initializeServer } from './server';
import { initializeServices } from './services';

const main = async () => {
    const appServices = await initializeServices();
    const server = initializeServer(appServices);

    server.listen(process.env.PORT, () => {
        console.log(`Tickets API listening at http://localhost:${process.env.PORT}`)
    });
}

main().catch(err => {
    console.error(err.stack);
    throw err;
});
