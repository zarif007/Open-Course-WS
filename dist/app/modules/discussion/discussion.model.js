"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discussion = void 0;
const mongoose_1 = require("mongoose");
const DiscussionSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Discussion',
        default: [],
    },
    reactions: {
        type: Object,
        default: {},
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Discussion = (0, mongoose_1.model)('Discussion', DiscussionSchema);
