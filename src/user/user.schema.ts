import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';
import { UserRole } from './user.interface';
import { IsPhoneNumber, IsNotEmpty } from 'class-validator';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'User', _id: true })
export class User {
  @IsPhoneNumber()
  @IsNotEmpty()
  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  role: UserRole;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    type: {
      firstName: String,
      lastName: String,
    },
  })
  name: {
    firstName: string;
    lastName: string;
  };

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, default: 0 })
  budget: number;

  @Prop({ required: true, default: 0 })
  income: number;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
