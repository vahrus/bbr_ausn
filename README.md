# АУСН — ББР Банк

Продуктовая landing page сервиса АУСН ББР Банка. Страница знакомит
пользователя с режимом АУСН и переводит его в существующий сервис
авторизации и оформления: <https://ausn.bbr.ru/auth>.

Собственной авторизации и backend-логики в проекте нет.

## Что реализовано

- адаптивный premium hero в фирменном стиле ББР Банка;
- официальный логотип `public/images/logo_rus.png`;
- glassmorphism-визуализация потоков данных АУСН на CSS и SVG;
- секции о режиме, преимуществах, условиях применения и шагах перехода;
- блок о роли ББР Банка;
- доступный FAQ-аккордеон;
- адаптивное мобильное меню с управлением с клавиатуры;
- финальный CTA и footer;
- SEO metadata и русская локализация;
- поддержка `prefers-reduced-motion`;
- единая конфигурация контента и адреса авторизации.

Все CTA используют константу `AUTH_URL` из `src/config/site.ts` и открывают
сервис авторизации в текущей вкладке.

## Технологии

- Next.js 16;
- React 19;
- TypeScript;
- CSS Modules;
- SVG/CSS-анимации без сторонних UI- и animation-библиотек.

Требуется Node.js версии `20.9.0` или новее.

## Структура

```text
src/
├── app/                 # страница, layout, metadata и глобальные стили
├── components/          # секции landing page и CSS Modules
└── config/site.ts       # AUTH_URL, navigation и контентные структуры

public/images/           # статические изображения и логотип
```

## Локальная разработка

```bash
npm ci
npm run dev
```

Страница будет доступна по адресу <http://localhost:3000>.

## Проверки

```bash
npm run lint
npm run typecheck
npm run build
```

## Развёртывание в Dokploy

Проект содержит production `Dockerfile` с multi-stage сборкой на Node.js 22
и запускает Next.js в standalone-режиме.

В настройках Application укажите:

- Build Type: `Dockerfile`;
- Dockerfile Path: `Dockerfile`;
- Docker Context Path: `.`;
- Docker Build Stage: оставить пустым.

Переменные `NIXPACKS_*` при этом не нужны. В разделе Domains укажите
`Container Port: 3000`. Публиковать порт отдельно через Advanced → Ports
не требуется: запросы к контейнеру направляет Traefik.

После сохранения настроек нажмите Deploy. Команда запуска уже определена
в Dockerfile.

## Запуск на сервере

На сервере должны быть установлены Node.js `>=20.9.0` и npm.

```bash
git clone <URL_РЕПОЗИТОРИЯ> bbr-ausn
cd bbr-ausn
npm ci
npm run build
npm start -- --hostname 127.0.0.1 --port 3000
```

Приложение запускается в production-режиме на `127.0.0.1:3000`. Для
публичного доступа рекомендуется разместить перед ним Nginx или другой
reverse proxy с настроенным HTTPS.

Для постоянной работы процесса используйте systemd. Пример unit-файла
`/etc/systemd/system/bbr-ausn.service`:

```ini
[Unit]
Description=BBR AUSN landing page
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/bbr-ausn
ExecStart=/usr/bin/npm start -- --hostname 127.0.0.1 --port 3000
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

После создания unit-файла:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now bbr-ausn
sudo systemctl status bbr-ausn
```

Путь `WorkingDirectory`, пользователя и путь к `npm` необходимо изменить
под конфигурацию конкретного сервера. Узнать путь к npm можно командой
`which npm`.

## Обновление production-версии

```bash
cd /var/www/bbr-ausn
git pull
npm ci
npm run build
sudo systemctl restart bbr-ausn
```
