import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from 'nestjs-config';
import { AudioProcessor } from './audio.processor';
import { AudioController } from './audio.controller';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'audio',
      useFactory: (config: ConfigService) => ({
        redis: config.get('redis'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule {}
