import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUser() {
    const result = await this.userModel.find({});
    return result;
  }

  async getSingleUser(id: string) {
    const result = await this.userModel.findById(id);
    return result;
  }
}
