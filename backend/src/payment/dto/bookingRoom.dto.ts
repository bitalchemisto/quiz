import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BookingRoomInput {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Field({ nullable: false })
  roomId: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Field({ nullable: false })
  attendance: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Field({ nullable: false })
  request: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Field({ nullable: false })
  startTime: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Field({ nullable: false })
  endTime: string;
}
