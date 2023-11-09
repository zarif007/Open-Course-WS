/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IDiscussion = {
  id?: number | string;
  _id?: string;
  sender: IUser | string;
  course: string;
  topic: string;
  version: string | number;
  comment: string;
  replies: IDiscussion[] | [] | Types.ObjectId[];
  reactions: {
    [key: string]: string[];
  };
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
};

export type IDiscussionModel = Model<IDiscussion, Record<string, unknown>>;
