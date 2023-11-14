import * as mongoose from 'mongoose';
import app from './app/index.js';
import config from './config/index.js';

async function bootstrap(){
  try {
    await mongoose.connect(config.dbUrl);
    console.log('Successfully connected to DB');
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.log('Failed to connect DB');
  }
}

bootstrap();
