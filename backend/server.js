// const express = require('express');
// import를 사용하기 위해서는 package.json에 "type": "module" 필요합니다.
import express from 'express';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';

import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); // 요청 본문(req.body)을 JSON 형식으로 파싱할 수 있게 해줍니다.

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Server is running... port:' + PORT);
  connectDB();
});
