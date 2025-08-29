Instrucciones para probar RegisterPage y LoginPage (sin romper nada de lo existente):

1) Abrir src/App.jsx y, temporalmente, comentar la línea que renderiza <Home />.
2) Importar y renderizar una de las nuevas páginas, por ejemplo:
   import RegisterPage from './views/RegisterPage'
   // import LoginPage from './views/LoginPage'

   Luego, en el JSX:
   {/* <Home /> */}
   <RegisterPage />
   // <LoginPage />

3) Guardar y revisar en el navegador. Ambas páginas usan Bootstrap y muestran mensajes
   de éxito o error según las validaciones mínimas solicitadas en el PDF.
4) Cuando termines, puedes descomentar <Home /> para volver al estado original.

Estas páginas NO modifican estilos ni funcionalidad existentes; sólo se añadieron dos archivos nuevos con export default.
