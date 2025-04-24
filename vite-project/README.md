# Selection Page Task

**Одностраничное приложение** на Vue 3 + Vite + TypeScript с возможностью выбирать до 6 своих вещей и одну вещь «из магазина», а также страницей «Контакты автора».

## 📦 Технологии

- **Vue 3** – прогрессивный фреймворк для UI  
- **Vite** – быстрый сборщик и дев-сервер  
- **TypeScript** – строгая типизация  
- **Vue Router 4** – маршрутизация  
- **Sass (SCSS)** – модули стилей с современным синтаксисом `@use`/`@forward`  
- **Jest 27 + @vue/vue3-jest + ts-jest** – unit-тесты компонентов и логики  

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/itsectorkss/Testovoe.git
cd Testovoe/vite-project

# 2. Установить зависимости
npm install

# 3. Запустить дев-сервер
npm run dev
# Открыть http://localhost:5173

# 4. Сборка для продакшена
npm run build

# 5. Локальный превью продакшена
npm run preview

Проект покрыт тестами на логику выбора (toggleUserItem, toggleShopItem) и на компонент ItemBox.vue.
# Запуск всех unit-тестов
npm run test




vite-project/
├── public/                # статика (favicon, иконки)
├── src/
│   ├── assets/            # изображения, шрифты
│   ├── components/        # переиспользуемые Vue-компоненты
│   │   ├── ItemBox.vue
│   │   ├── ItemList.vue
│   │   └── SelectionInfo.vue
│   ├── views/             # route-level компоненты
│   │   ├── SelectionPage.vue
│   │   └── ContactsPage.vue
│   ├── router/            # конфигурация Vue Router
│   │   └── index.ts
│   ├── styles/            # SCSS-модули (base, layout, components)
│   │   └── index.scss     # главный импорт
│   ├── types/             # общие интерфейсы и типы
│   │   └── ui.ts
│   ├── main.ts            # точка входа
│   └── App.vue            # корневой компонент с <router-view>
├── __tests__/             # Jest-тесты
├── jest.config.cjs        # конфиг Jest
├── tsconfig.json          # TypeScript конфиг
├── vite.config.ts         # конфиг Vite + alias (@ → src)
└── package.json


✉️ Контакты автора
Сергей

Telegram: @const_DEV

GitHub: itsectorkss