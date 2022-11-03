import { Module } from '@nestjs/common';
import { PasswordService } from 'src/auth/password.service';
import { MeetingRoomsResolver } from './meeting-rooms.resolver';

@Module({
  imports: [],
  providers: [MeetingRoomsResolver, PasswordService],
})
export class MeetingRoomsModule {}
