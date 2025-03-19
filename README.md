# Administración Escolar - FCA UNAM

Este es un proyecto web para la administración escolar en la Facultad de Contaduría y Administración de la UNAM. Actualmente, el desarrollo incluye un sistema de inicio de sesión para profesores y alumnos, junto con varias secciones informativas.

## Características
- **Login para profesores y alumnos**
- **Estructura básica del sitio**: Header, Footer, Index
- **Páginas adicionales**:
  - Calendario
  - Créditos
  - Directorio

## Tecnologías utilizadas
- **HTML, CSS y JavaScript** para el diseño y la funcionalidad
- **Visual Studio Code** como entorno de desarrollo
- **Live Server** para visualización en tiempo real

## Estructura del Proyecto
```
/
├── alumno/
├── assets/
│   ├── css/
│   │   ├── calendario.css
│   │   ├── creditos.css
│   │   ├── directorio.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── index.css
│   │   ├── login-alumno.css
│   │   ├── login-profesor.css
│   │   ├── login.css
│   │   ├── styles.css
│   ├── fonts/
│   ├── images/
│   ├── js/
│   │   ├── auth/
│   │   │   ├── calendario.js
│   │   │   ├── components.js
│   │   │   ├── header.js
│   │   │   ├── index.js
├── auth/
│   ├── login-alumno.html
│   ├── login-profesor.html
├── components/
│   ├── calendario.html
│   ├── creditos.html
│   ├── footer.html
│   ├── header.html
├── data/
│   ├── Calendario-Escolar-Periodo-*.pdf
├── libs/
├── profesor/
├── directorio.html
├── index.html
```

## Instalación y uso
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DevResident/Administracion-Escolar.git
   ```
2. Abrir el proyecto en **Visual Studio Code**
3. Instalar la extensión **Live Server** si no la tienes
4. Iniciar el servidor en **index.html**
5. Acceder al proyecto desde el navegador en `http://localhost:5500`

## Próximos desarrollos
- Implementación de base de datos y backend
- Panel de administración
- Gestión de alumnos y profesores
- Mejoras en la interfaz y accesibilidad

## Capturas de pantalla
A continuación, se presentan algunas capturas de pantalla del sistema en funcionamiento:
![image](https://github.com/user-attachments/assets/aef374e4-1e6f-402d-835e-4e597088dccc)
![image](https://github.com/user-attachments/assets/4fc7f708-af43-4078-a85e-6a700a5b10c6)
![image](https://github.com/user-attachments/assets/9b89d571-a27a-49b3-919b-d237482182e6)

## Créditos
Desarrollado por [Fernando Hurtado] para la Facultad de Contaduría y Administración - UNAM

## Licencia
Este proyecto se encuentra bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
