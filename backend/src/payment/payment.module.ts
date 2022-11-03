import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controler';

@Module({
  imports: [],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
