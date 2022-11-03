import { Locations } from './../../locations/models/location.model';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { PricingMethods } from '../../pricingMethods/models/pricing-methods.model';
import { BookingRooms } from '../../bookingRooms/models/booking-rooms.model';

@ObjectType()
export class MeetingRooms extends BaseModel {
  @Field()
  name: string;

  @Field(() => String)
  locationId?: string | null;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  timezone: string;

  @Field(() => String)
  images: string;

  @Field(() => String)
  pricingMethodId: string;

  @Field(() => Int)
  accupantCapacity: number;

  @Field(() => Locations)
  location: Locations | null;

  @Field(() => PricingMethods)
  pricingMethod: PricingMethods | null;

  @Field(() => [BookingRooms])
  bookingRooms: [BookingRooms] | null;
}
