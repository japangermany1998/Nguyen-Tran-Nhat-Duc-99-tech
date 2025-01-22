import express, { Application } from 'express';
import resourceRoutes from './router/route';

const app: Application = express();

app.use(express.json());
app.use('/api/resources', resourceRoutes);

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    // Optionally handle the rejection (e.g., log it, notify the admin)
    process.exit(1); // Exit the app with a failure code (1)
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


export default app;

