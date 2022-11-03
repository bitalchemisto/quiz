import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaymentInput } from './dto/createPayment.dto';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/payment')
  @ApiOperation({ summary: '' })
  async paymentGateway(@Body(ValidationPipe) paymentDto: PaymentInput) {
    const bookingRoom = await this.paymentService.createBookingRoom(
      paymentDto.bookingRooms
    );
    const contactInforInput = {
      company: paymentDto.company,
      name: paymentDto.name,
      email: paymentDto.email,
      mobile: paymentDto.mobile,
    };

    const contactInfor = await this.paymentService.createContactInformation(
      contactInforInput
    );

    return await this.paymentService.createPurchaseOrder({
      contactId: contactInfor.id,
      bookingRoomId: bookingRoom.id,
    });
  }
}
