import { MeetingRooms } from '../../meetingRooms/models/meeting-rooms.model';
import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { Role } from '@prisma/client';

@ObjectType()
export class PricingMethods extends BaseModel {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
