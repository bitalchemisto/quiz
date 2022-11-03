import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ContactInformationInput {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Field({ nullable: false })
  company: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Field({ nullable: false })
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Field({ nullable: false })
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Field({ nullable: false })
  mobile: string;
}
