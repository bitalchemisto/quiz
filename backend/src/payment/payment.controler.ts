import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaymentInput } from './dto/createPayment.dto';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/payment')
  @ApiOperation({ summary: 'Integrated Stripe payment gateway for fiat type' })
  paymentGateway(@Body(ValidationPipe) paymentDto: PaymentInput) {
    return this.paymentService.create(paymentDto);
  }
}
