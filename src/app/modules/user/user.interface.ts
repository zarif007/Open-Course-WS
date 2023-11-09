import { Model } from 'mongoose';

export type IUser = {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  image: string;
  role?: 'super_admin' | 'admin' | 'user' | 'pro_User';
  preferences?: string[];
  userName?: string;
  bio?: string;
};

export type IUserModel = Model<IUser, Record<string, unknown>>;
