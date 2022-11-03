import { MeetingRooms } from '../../meetingRooms/models/meeting-rooms.model';
import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class BookingRooms extends BaseModel {
  @Field()
  roomId: string;

  @Field(() => Number)
  attendance: number;

  @Field(() => String)
  request: string;

  @Field(() => String)
  startTime: string;

  @Field(() => String)
  endTime: string;

  @Field(() => Number)
  totalAmount: number;

  @Field(() => String)
  breakDown: string;

  @Field(() => String)
  userId: string;

  @Field(() => MeetingRooms)
  meetingRoom: MeetingRooms;
}
