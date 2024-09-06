// const express = require('express');
// import를 사용하기 위해서는 package.json에 "type": "module" 필요합니다.
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path'; // 배포 단계에서 추가함

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve(); // 배포 단계에서 추가함

app.use(express.json()); // 요청 본문(req.body)을 JSON 형식으로 파싱할 수 있게 해줍니다.
app.use(cookieParser()); // 요청의 쿠키를 파싱하고 req.cookies 객체로 만들어주는 미들웨어입니다.

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movie', protectRoute, movieRoutes);
app.use('/api/v1/tv', protectRoute, tvRoutes);
app.use('/api/v1/search', protectRoute, searchRoutes);

// 배포 단계에서 추가함
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server is running... port:' + PORT);
  connectDB();
});
