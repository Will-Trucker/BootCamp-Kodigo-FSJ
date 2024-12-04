const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const SECRET_KEY = 'mysecretkey'; 
const BOOTCAMPS_FILE = './data/bootcamps.json';

// Leer el archivo JSON de usuarios
const readUsersFromFile = () => {
    const data = fs.readFileSync('./data/users.json', 'utf-8');
    return JSON.parse(data);
};

// Leer el archivo JSON de bootcamps
const readBootcampsFromFile = () => {
    const data = fs.readFileSync(BOOTCAMPS_FILE, 'utf-8');
    return JSON.parse(data);
};

// Guardar bootcamps en el archivo JSON
const saveBootcampsToFile = (bootcamps) => {
    fs.writeFileSync(BOOTCAMPS_FILE, JSON.stringify(bootcamps, null, 2));
};

// Guardar usuarios en el archivo JSON
const saveUsersToFile = (users) => {
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
};

// Registro de nuevo usuario
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFromFile();


    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);
    saveUsersToFile(users);

    res.status(201).json({ message: 'Usuario registrado correctamente' });
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});


// Middleware para verificar token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token requerido' });
    }

    try {
        const bearerToken = token.split(' ')[1];
        const verified = jwt.verify(bearerToken, SECRET_KEY);
        req.user = verified; 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

// Ruta protegida (ejemplo de dashboard)
router.get('/dashboard', verifyToken, (req, res) => {
    res.json({ userLogin: {id: `${req.user.id}`, username: `${req.user.username}` } });
});

// Ruta para obtener todos los bootcamps (con validación de token)
router.get('/bootcamps/all', verifyToken, (req, res) => {
    const bootcamps = readBootcampsFromFile();
    res.json(bootcamps);
});

// Ruta protegida para crear nuevos bootcamps (requiere autenticación)
router.post('/bootcamps/create', verifyToken, (req, res) => {
    const { name, description, technologies } = req.body;

    if (!name || !description || !technologies || !Array.isArray(technologies)) {
        return res.status(400).json({ message: 'Todos los campos son requeridos y technologies debe ser un arreglo' });
    }

    let bootcamps = readBootcampsFromFile();

    let existingBootcamp = bootcamps.find(bootcamp => bootcamp.name === name);

    if (existingBootcamp) {
        if (!existingBootcamp.active) {
            existingBootcamp.active = true;
            existingBootcamp.description = description;
            existingBootcamp.technologies = technologies;

            saveBootcampsToFile(bootcamps);
            return res.json({ message: 'Bootcamp reactivado y actualizado correctamente', bootcamp: existingBootcamp });
        } else {
            return res.status(400).json({ message: 'El bootcamp ya existe y está activo' });
        }
    }

    const newBootcamp = {id: bootcamps.length + 1, name, description, technologies, active: true};
    bootcamps.push(newBootcamp);
    saveBootcampsToFile(bootcamps);

    return res.json({ message: 'Bootcamp agregado correctamente', bootcamp: newBootcamp });
});


// Ruta para actualizar un bootcamp (requiere autenticación)
router.put('/bootcamps/update/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const { name, description, technologies } = req.body;

    if (!name || !description || !technologies || !Array.isArray(technologies)) {
        return res.status(400).json({ message: 'Todos los campos son requeridos y technologies debe ser un arreglo' });
    }

    let bootcamps = readBootcampsFromFile();

    let bootcamp = bootcamps.find(bootcamp => bootcamp.id === parseInt(id));
    if (!bootcamp) {
        return res.status(404).json({ message: 'Bootcamp no encontrado' });
    }

    bootcamp.name = name;
    bootcamp.description = description;
    bootcamp.technologies = technologies;

    saveBootcampsToFile(bootcamps);

    return res.json({ message: 'Bootcamp actualizado correctamente', bootcamp });
});

// Ruta para desactivar un bootcamp (soft delete) (requiere autenticación)
router.delete('/bootcamps/delete/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    let bootcamps = readBootcampsFromFile();

    let bootcamp = bootcamps.find(bootcamp => bootcamp.id === parseInt(id));
    if (!bootcamp) {
        return res.status(404).json({ message: 'Bootcamp no encontrado' });
    }

    bootcamp.active = false;

    saveBootcampsToFile(bootcamps);

    return res.json({ message: 'Bootcamp desactivado correctamente', bootcamp });
});

module.exports = router;