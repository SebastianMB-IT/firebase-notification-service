import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Successfully sent message: ..."', () => {
      expect(
        appController.sendNotification({
          user: process.env.TEST_USER,
          server: process.env.TEST_SERVER,
          callid: process.env.TEST_CALLID,
          uuid: process.env.TEST_UUID,
        }),
      ).toMatch(/'Successfully sent message'/i);
    });
  });
});
