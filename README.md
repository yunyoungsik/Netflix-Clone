# Netflix Clone

[참고영상](https://youtu.be/gRroBZczKAU?si=pHYTPM9TzZg_3B2d)

## backend

```
npm init -y
npm i express jsonwebtoken mongoose cookie-parser dotenv axios bcryptjs
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

## frontend
```
npm create vite@latest .
npm i axios lucide-react react-player react-hot-toast react-router-dom zustand
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```