import {Router} from 'express';
import * as deviceCtrl from '../controllers/device.controller.js';

const router = Router();

router.get('/list',deviceCtrl.getDevices)

export default router;