Это проект [Next.js](https://nextjs.org/), созданный с использованием инструмента [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Backend выполнен с помощью JSON-сервера [json-server](https://github.com/typicode/json-server)

## Начало работы

1. Выполните установку всех зависимостей

```bash
npm install
```

2. Добавьте .env-файл в корень проекта и укажите в нем URL адреса для вашего NextJS сервера и JSON-сервера, в формате:

```bash
NEXT_API_SERVER_URL=http://localhost:8080
NEXT_API_CLIENT_URL=http://localhost:3000/api
```
3. Запустите проект в режиме разработки
```bash
npm run dev
```
4. Запустите сервер JSON 
```bash
npm run json-server
```
