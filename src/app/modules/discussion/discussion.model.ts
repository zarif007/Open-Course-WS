import { Schema, model } from 'mongoose';
import { IDiscussion, IDiscussionModel } from './discussion.interface';

const DiscussionSchema = new Schema<IDiscussion, IDiscussionModel>(
  {

  }
);

export const Discussion = model<IDiscussion, IDiscussionModel>('Discussion', DiscussionSchema);
