import { MeetingRooms } from './../../meetingRooms/models/meeting-rooms.model';
import 'reflect-metadata';
import {
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Locations extends BaseModel {
  @Field()
  name: string;

  @Field(() => String)
  area: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  timezone: string;

  @Field(() => [MeetingRooms])
  meetingRooms: [MeetingRooms] | null;
}
