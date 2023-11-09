import { Schema, model } from 'mongoose';
import { IDiscussion, IDiscussionModel } from './discussion.interface';

const DiscussionSchema = new Schema<IDiscussion, IDiscussionModel>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender is required'],
    },
    course: {
      type: String,
      required: [true, 'Course is required'],
    },
    topic: {
      type: String,
      required: [true, 'Course Topic is required'],
    },
    version: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
    },
    replies: {
      type: [Schema.Types.ObjectId],
      ref: 'Discussion',
      default: [],
    },
    reactions: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Discussion = model<IDiscussion, IDiscussionModel>(
  'Discussion',
  DiscussionSchema
);
