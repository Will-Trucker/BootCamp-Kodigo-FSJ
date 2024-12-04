
# Bootcamp API

Este proyecto es una API básica para gestionar usuarios y bootcamps. Permite registrar, iniciar sesión y realizar operaciones CRUD sobre bootcamps.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Configuración del entorno

1. Clona este repositorio:

```bash
git clone https://github.com/JairoAdrianVR/Kodigo-api.git
```

2. Navega al directorio del proyecto:
```bash
 
cd nombre-repo
```

3. Instala las dependencias:
```bash
 
npm install
# o
yarn install
```

4. Inicia el servidor:
```bash
 
npm start
# o
yarn start
```
El servidor estará corriendo en http://localhost:5000.


# Documentación de Endpoints

Este documento describe los endpoints disponibles en la API para gestionar usuarios y bootcamps.

### Registro de nuevo usuario

- **URL**: `/api/auth/register`
- **Metodo**: `POST`
- **Descripción****: Crea un nuevo usuario en el sistema.
- ** - ** Body ****:
  ```json
  {
    "username": "usuario",
    "password": "contraseña"
  }
- Respuestas:
201: Usuario registrado correctamente.
400: El usuario ya existe.

## **Inicio de sesión**
- **URL****: `/api/auth//login`
- **Metodo**: `POST`
- **Descripción**: Permite a un usuario autenticarse.
- ** Body **:
```json
 
{
  "username": "usuario",
  "password": "contraseña"
}
```
- Respuestas:
200: Devuelve un token de Autenticación.
400: Credenciales inválidas.

## - **Autenticación**

## Middleware de Autenticación
** Verificar token de autenticación ** 
- **URL**: `/api/auth/dashboard`
- **Método**: `GET` Middleware (llamado en cada endpoint protegido)
- **Descripción**: Verifica si el token de autenticación (JWT) es válido. Se debe enviar el token en el header de la solicitud.
- **Header**:
```json
{
  "Authorization": "Bearer <token>"
}
```
Respuestas:
403: Token requerido (si no se envía el token).
401: Token inválido (si el token no es válido o ha expirado).
200: Autenticación exitosa, devuelve un objeto userLogin.

## ** BOOTCAMPS **

## Obtener todos los bootcamps
- **URL**: `/api/auth/bootcamps/all`
- **Metodo**: `GET`
- **Autenticación**: Bearer Token
- **Descripción**: Devuelve una lista de todos los bootcamps.
- Respuestas:
200: Devuelve un array de bootcamps.

## Crear un nuevo bootcamp
- **URL**: `/api/auth/bootcamps/create`
- **- **Metodo****: `POST`
- **Autenticación**: Bearer Token
- **Descripción**: Crea un nuevo bootcamp.
 - ** Body **:
```json
{
  "name": "nombre",
  "description": "Descripción",
  "technologies": ["tecnología1", "tecnología2"]
}
```
- Respuestas:
200: Bootcamp creado correctamente.
200: El bootcamp ya existe y se activo correctamente.

## Actualizar un bootcamp
- **URL**: `/api/auth/bootcamps/update/:id`
- **Metodo**: `PUT`
- **Autenticación**: Bearer Token
- **Descripción**: Actualiza un bootcamp existente por su ID.
- ** Body **:
```json
{
  "name": "nuevo nombre",
  "description": "nueva Descripción",
  "technologies": ["nueva tecnología"]
}
```
- Respuestas:
200: Bootcamp actualizado correctamente.
404: Bootcamp no encontrado.

## Desactivar un bootcamp (Soft Delete)
- **URL**: `/api/auth/bootcamps/delete/:id`
- **Metodo**: `DELETE`
- **Autenticación**: Bearer Token
- **Descripción**: Desactiva un bootcamp por su ID (no lo borra permanentemente).
- Respuestas:
200: Bootcamp desactivado correctamente.
404: Bootcamp no encontrado.
