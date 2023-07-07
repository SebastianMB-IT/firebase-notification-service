import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
import * as serviceAccountKey from '../serviceAccountKey.json';

function initFirebaseSDK() {
  // Initialize firebase admin SDK docs: https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments
  try {
    const serviceAccount = serviceAccountKey as ServiceAccount;
    initializeApp({
      credential: cert(serviceAccount),
    });
    console.warn('Firebase SDK initialized');
  } catch (error) {
    console.warn(error);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  initFirebaseSDK();
}
bootstrap();
