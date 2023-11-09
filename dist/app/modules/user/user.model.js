"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    },
    role: {
        type: String,
        default: 'user',
    },
    preferences: {
        type: [String],
        default: [],
    },
    bio: {
        type: String,
        default: '',
    },
    userName: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
