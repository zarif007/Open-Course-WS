/* eslint-disable @typescript-eslint/no-unused-vars */
import { DiscussionService } from './discussion.service';
import { IDiscussion } from './discussion.interface';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getDiscussions = catchAsync(async (req, res) => {
  const result = await DiscussionService.getDiscussions();
  // eslint-disable-next-line no-console
  console.log('hiiiiiitttt');
  sendResponse<IDiscussion[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All discussions',
    data: result,
  });
});

export const DiscussionController = {
  getDiscussions,
};
