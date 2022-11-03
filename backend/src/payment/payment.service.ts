import { PaymentInput } from './dto/createPayment.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  create(paymentInput: any) {
    return this.prisma.user.create({
      data: paymentInput,
    });
  }
}
