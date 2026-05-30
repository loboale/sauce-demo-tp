# Sauce Demo - TP Clase 5

Trabajo práctico de automatización de pruebas con Cypress para el módulo de Sauce Demo, correspondiente a la Clase 5 de XAcademy QA Automation.

## 🧪 Tests automatizados

- **Login**: 5 tests (exitoso, contraseña incorrecta, campos vacíos, usuario bloqueado, logout)
- **Carrito**: 3 tests (agregar, múltiples, eliminar)
- **Checkout**: 3 tests (válido, vacío, campo Last Name con problem_user)
- **Inventario**: 4 tests (cantidad, ordenar, imágenes con problem_user, ordenar con problem_user)

## 🐛 Bugs reportados en Trello

Los siguientes bugs fueron encontrados con el usuario `problem_user` y reportados en Trello:

💡 Nota sobre los enlaces a Trello
Al hacer clic en los enlaces de las tarjetas, GitHub los abrirá en la misma pestaña y saldrás del repositorio. Para evitarlo, te recomendamos hacer clic derecho sobre el enlace y seleccionar "Abrir en una nueva pestaña" (o "Abrir enlace en pestaña nueva", según tu navegador). Así mantenés el README a la vista mientras revisás los bugs en Trello.

- BUG-SAUCEDEMO-001 - https://trello.com/c/uBLV8H2O - Imágenes de productos incorrectas
- BUG-SAUCEDEMO-002 - https://trello.com/c/hSpwjt1b - Ordenar productos por precio no funciona
- BUG-SAUCEDEMO-003 - https://trello.com/c/Eev928tv - Campo Last Name no acepta texto

## 🔗 Link al tablero de Trello

[Tablero Sauce Demo - TP](https://trello.com/invite/b/6a17eb008aa75c0913cae7d1/ATTIa929d823544ebd63265510b45555fad9A93DDCFF/sauce-demo)

## 📄 Reportes de Bugs (PDF)
Además de los tickets de Trello, se incluyen los reportes formales en formato PDF en la carpeta `reportes-de-bugs/`:

- [BUG-SAUCEDEMO-001 - Imágenes de productos incorrectas](reportes-de-bugs/Template%20de%20reporte%20de%20bugs%20-%20BUG-SAUCEDEMO%20-%20001%20-%20Imágenes%20de%20productos%20incorrectas%20con%20problem_user.pdf)
- [BUG-SAUCEDEMO-002 - Ordenar productos por precio no funciona](reportes-de-bugs/Template%20de%20reporte%20de%20bugs%20-%20BUG-SAUCEDEMO%20-%20002%20-%20Ordenar%20productos%20por%20precio%20no%20funciona%20con%20problem_user%20.pdf)
- [BUG-SAUCEDEMO-003 - Campo Last Name no acepta texto](reportes-de-bugs/Template%20de%20reporte%20de%20bugs%20-%20BUG-SAUCEDEMO%20-%20003%20-%20Campo%20Last%20Name%20no%20acepta%20texto%20con%20problem_user.pdf)

## 🚀 Cómo ejecutar los tests

1. Cloná el repositorio
2. Instalá las dependencias: `npm install`
3. Abrí Cypress: `npx cypress open`
