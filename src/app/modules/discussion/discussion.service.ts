/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDiscussion } from './discussion.interface';
import { Discussion } from './discussion.model';

const getDiscussions = async (): Promise<IDiscussion[] | null> => {
  const discussions = await Discussion.find({});

  return discussions;
};

export const DiscussionService = {
  getDiscussions,
};
