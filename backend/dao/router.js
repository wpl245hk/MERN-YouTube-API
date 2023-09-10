import express from 'express';
import controller from './controller.js';

const router = express.Router();

router.route('/youtube/:name').get(controller.youtubeApiGet)

router.route('/mongodb')
.get(controller.mongodbApiGet)
.post(controller.mongodbApiPost)

export default router