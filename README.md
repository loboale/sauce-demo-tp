# Sauce Demo - TP Clase 5

Trabajo práctico de automatización de pruebas con Cypress para el módulo de Sauce Demo, correspondiente a la Clase 5 de XAcademy QA Automation.

## 🧪 Tests automatizados

- **Login**: 5 tests (exitoso, contraseña incorrecta, campos vacíos, usuario bloqueado, logout)
- **Carrito**: 3 tests (agregar, múltiples, eliminar)
- **Checkout**: 3 tests (válido, vacío, campo Last Name con problem_user)
- **Inventario**: 4 tests (cantidad, ordenar, imágenes con problem_user, ordenar con problem_user)

## 🐛 Bugs reportados en Trello

Los siguientes bugs fueron encontrados con el usuario `problem_user` y reportados en Trello:

- BUG-SAUCEDEMO-001 - https://trello.com/c/uBLV8H2O - Imágenes de productos incorrectas
- BUG-SAUCEDEMO-002 - https://trello.com/c/hSpwjt1b - Ordenar productos por precio no funciona
- BUG-SAUCEDEMO-003 - https://trello.com/c/Eev928tv - Campo Last Name no acepta texto

## 🔗 Link al tablero de Trello

[Tablero Sauce Demo - TP](https://trello.com/invite/b/6a17eb008aa75c0913cae7d1/ATTIa929d823544ebd63265510b45555fad9A93DDCFF/sauce-demo)

## 🚀 Cómo ejecutar los tests

1. Cloná el repositorio
2. Instalá las dependencias: `npm install`
3. Abrí Cypress: `npx cypress open`
