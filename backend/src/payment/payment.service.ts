import { PaymentInput } from './dto/createPayment.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { ContactInformationInput } from './dto/contactInformation.dto';
import { BookingRoomInput } from './dto/bookingRoom.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createBookingRoom(data: BookingRoomInput[]) {
    return await this.prisma.BookingRooms.create({
      data: data,
    });
  }

  async createContactInformation(data: ContactInformationInput) {
    return await this.prisma.ContactInformation.create({
      data: data,
    });
  }

  async createPurchaseOrder(data: any) {
    return await this.prisma.PurchaseOrder.create({
      data: data,
    });
  }
}
