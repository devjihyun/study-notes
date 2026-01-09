# VitePress 설치 & GitHub Pages 배포 가이드

## 1. 설치

### 1) 패키지 설치

```bash
npm i -D vitepress
npx vitepress init
```

### 2) 스크립트 추가 (package.json)

```json
"scripts": {
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

### 3) 로컬 실행

```bash
npm run docs:dev
```

## 2. GitHub Pages 연동

### 1) Public 레포 생성

- Private 레포는 무료 Pages 사용 불가

### 2) base 설정

```ts
export default {
  base: "/레포이름/",
};
```

## 3. 배포 (GitHub Actions)

### 1) 워크플로우 생성

```bash
.github/workflows/deploy.yml
```

```yml
name: Deploy VitePress

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

### 2) GitHub 설정

Settings → Pages
Source → GitHub Actions

## 4. 배포 주소

```arduino
https://username.github.io/레포이름
```

## 5. 요약

- VitePress 설치 → config 설정
- Public 레포 생성
- base 경로 설정
- GitHub Actions로 자동 배포
- Push 하면 자동 배포되는 문서 사이트 완성
