import { BookingRooms } from './../bookingRooms/models/booking-rooms.model';
import { MeetingRooms } from './models/meeting-rooms.model';
import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Args,
  ResolveField,
  Subscription,
  Mutation,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { MeetingRoomsArgs } from './args/meeting-rooms.args';

const pubSub = new PubSub();

@Resolver(() => MeetingRooms)
export class MeetingRoomsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [MeetingRooms])
  availableMeetingRooms(@Args() data: MeetingRoomsArgs) {
    return this.prisma.MeetingRooms
      .findMany({ include: { bookingRooms: true }, 
        where: { locationId: data.locationId }
         });

  }
}
