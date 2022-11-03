import { IsNotEmpty } from 'class-validator';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class MeetingRoomsArgs {
  @IsNotEmpty()
  locationId: string;

  @IsNotEmpty()
  startTime: string;

  @IsNotEmpty()
  endTime: string;
}
