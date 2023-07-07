import { Injectable } from '@nestjs/common';
import { getMessaging } from 'firebase-admin/messaging';
import { SendNotificationProps } from './types/notification';

@Injectable()
export class AppService {
  // Send notification function
  async sendNotification({
    user,
    server,
    callid,
    uuid,
  }: SendNotificationProps): Promise<string> {
    const message = {
      topic: `${user}%${server}`,
      data: {
        'call-id': callid,
        uuid: uuid,
      },
    };

    // Send a message to devices subscribed to the provided topic.
    try {
      const response = await getMessaging().send(message);
      return `Successfully sent message: ${response}`;
    } catch (error) {
      return `Error sending message: ${error}`;
    }
  }
}
