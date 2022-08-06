# Prueba ténica de Oauth2.0 - Constructora Bolivar
### David Portocarrero Caicedo
ing.portocarrero@gmail.com
315 770 54 56

## Para correr la aplicación
La aplicación está Dockerizada y disponible en el puerto `3000`.

En caso de tener acceso al código fuente, solo es necesario correr desde la consola el comando `npm start` y el servidor Express iniciará en puerto `3000`.

## Acceso al API
Rutas de la API. Disponible para las pruebas locales sobre el dominio `http://localhost:3000`.

### Index: Permite el enlace hacia el login
*Tiene contruida una vista para efectos de la prueba*
```
/
```

### Preparación de la librería Oauth2.0  Login con Google
Uso de Oauth2.0 por medio de la librería `passport` y `passport-google-oauth20`.
```
/google
```

### Login con Google
Ruta usada para solicitar credenciales al usuario.
```
/google/callback
```

### Ruta de bienvenida al usuario con sesión
Ruta usada para notificar al usuario que se a auntenticado satisfactoriamenta.
```
/logged
```

### Ruta de fallo en la autenticación
Ruta usada para notificar una falla en el login.
```
/failed
```

### Ruta de cierre de sesión
Ruta usada para eliminar la sesión del usuario en la aplicación. *Tener encuenta que este método no cierra la sesión del usuario en todo el navegador*.
```
/logout
```