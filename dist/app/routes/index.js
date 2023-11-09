"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discussion_route_1 = require("../modules/discussion/discussion.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/discussion',
        route: discussion_route_1.DiscussionRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
