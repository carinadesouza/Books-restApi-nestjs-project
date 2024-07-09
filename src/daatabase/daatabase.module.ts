import { Module } from '@nestjs/common';
import { DaatabaseService } from './daatabase.service';

@Module({
  providers: [DaatabaseService],
  exports:[DaatabaseService],
})
export class DaatabaseModule {}
