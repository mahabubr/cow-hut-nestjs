import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signup(payload: UserDocument) {
    try {
      const { password, ...userData } = payload;

      const hash = await bcrypt.hash(password, Number(process.env.SALTorROUND));

      const userInfo = {
        ...userData,
        password: hash,
      };
      const result = await this.userModel.create(userInfo);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
