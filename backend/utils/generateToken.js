import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });

  res.cookie('jwt-netflix', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15일 동안 유효한 밀리초(ms) 단위로 설정 (15일)
    httpOnliy: true, // XSS (크로스 사이트 스크립팅) 공격을 방지하기 위해 설정, 자바스크립트에서 접근 불가능하게 함
    sameSite: 'strict', // CSRF(크로스 사이트 요청 위조) 공격을 방지하기 위한 설정
    secure: ENV_VARS.NODE_ENV !== 'development', // 쿠키를 HTTPS 연결에서만 전송하도록 설정 (개발 환경이 아닌 경우에만 적용)
  });

  return token;
};
