# RESTfull API для управління бібліотекою книг
## Опис проекту
Даний проект є RESTfull API для управління бібліотекою книг. API реалізовано на Node.js з використанням Express та Sequelize.
Проект має докумнтацію за [адресою](http://13.49.114.29:3000/docs) (для роботи локально документації потрібно замінить у файлі /docs/docs.json =>  servers.url = http://localhost:port). База для тестів має двох користувачів user та admin.

```bash
# user
 username: 'user', password: 'user_password'
 
 #admin
 username: 'admin', password: 'admin_password'
```

## Installation

```bash
git clone https://github.com/dimatk01/library-api.git

cd library-api

npm install
```

## Environment

```bash
API_PORT=3000
JWT_SECRET=your_sercret
JWT_ACCESS_EXPIRATION=30m
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=root
DB_NAME=postgres
DB_PORT=5432
```

## Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run start
```


## Маршрути
### Книги (Books)
- GET /book - Отримати список всіх книг
- GET /book/:id - Отримати книгу за ідентифікатором
- POST /book - Створити нову книгу
- PATCH /book/:id - Оновити інформацію про книгу
- DELETE /book/:id - Видалити книгу
### Користувачі (Users)
- GET /user - Отримати список всіх користувачів
- GET /user/:id - Отримати користувача за ідентифікатором
- POST /user - Створити нового користувача
- PUT /user/:id - Оновити інформацію про користувача
- DELETE /user/:id - Видалити користувача
###  Ролі (Roles)
- GET /role - Отримати список всіх ролей
- GET /role/:id - Отримати роль за ідентифікатором
- POST /role - Створити нову роль
- PUT /role/:id - Оновити інформацію про роль
- DELETE /role/:id - Видалити роль
### Auth
- POST /auth/login - отримати токен доступу

### Docs
- GET /docs - відкривається Open Api документація