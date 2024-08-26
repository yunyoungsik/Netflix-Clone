// const express = require('express');
// import를 사용하기 위해서는 package.json에 "type": "module" 필요
import express from 'express';
import authRoutes from './routes/auth.route.js';

const app = express();

app.use('/api/v1/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running... port: 5000');
});
