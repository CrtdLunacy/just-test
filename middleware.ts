import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Маршруты, к которым можно получить доступ в режиме выхода (без входа в систему).
  publicRoutes: ['/api/cars', '/api/cars/(.*)'],
  // Роуты, к которым всегда можно получить доступ и которые
  // не требуют аутентификационной информации.
  ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
// Защищает все роуты, включая api/trpc.
// См. https://clerk.com/docs/references/nextjs/auth-middleware
// для получения дополнительной информации о настройке Middleware.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
