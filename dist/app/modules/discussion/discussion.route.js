"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const discussion_controller_1 = require("./discussion.controller");
const router = (0, express_1.Router)();
router.get('/', discussion_controller_1.DiscussionController.getDiscussions);
exports.DiscussionRoutes = router;
