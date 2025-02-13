FROM node:20.18-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock перед установкой зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь проект в контейнер
COPY . .

# Строим проект
RUN yarn build

# Указываем хост и порт
ENV HOST=0.0.0.0
EXPOSE 3000

# Запускаем сервер
CMD ["node", ".output/server/index.mjs"]
