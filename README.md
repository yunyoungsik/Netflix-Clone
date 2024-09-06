# Netflix Clone
<img style="width: 100%" src="https://github.com/yunyoungsik/Netflix-Clone/blob/main/frontend/public/thumnail.png?raw=true" />

[참고영상](https://youtu.be/gRroBZczKAU?si=pHYTPM9TzZg_3B2d)

## backend

```
npm init -y
npm i express jsonwebtoken mongoose cookie-parser dotenv axios bcryptjs
npm install cross-env
```

```
"scripts": {
    "dev": "node --watch backend/server.js"
  },

적용이 안될 경우 아래 라이브러리 설치 후 "scripts" 수정

npm i nodemon -D
 "scripts": {
    "dev": "nodemon backend/server.js"
  },
```

배포 단계에서 package.json 변경사항
```
"scripts": {
    "dev": "NODE_ENV=development nodemon backend/server.js",
    "start": "NODE_ENV=production node backend/server.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  },

*window환경에서는 cross-env를 설치 후 아래와 같이 변경
"scripts": {
    "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
    "start": "cross-env NODE_ENV=production node backend/server.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  },
```

## frontend
```
npm create vite@latest .
npm i axios lucide-react react-player react-hot-toast react-router-dom zustand
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i tailwind-scrollbar-hide
```
