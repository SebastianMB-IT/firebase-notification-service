import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SendNotificationProps } from './types/notification';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'Firebase Notification Service is running.';
  }

  @Get('/send/:user/:server/:callid/:uuid')
  sendNotification(@Param() params: SendNotificationProps): Promise<string> {
    return this.appService.sendNotification(params);
  }
}
