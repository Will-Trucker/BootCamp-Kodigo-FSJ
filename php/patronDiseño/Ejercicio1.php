<?php
// Interfaz base para los personajes
interface Character {
    public function attack();
    public function speed();
}

// Clase Skeleton
class Skeleton implements Character {
    public function attack() {
        return "Esqueleto ataca con flechas.";
    }
    public function speed() {
        return "Velocidad media.";
    }
}

// Clase Zombie
class Zombie implements Character {
    public function attack() {
        return "Zombi ataca con mordidas.";
    }
    public function speed() {
        return "Velocidad baja.";
    }
}

// Fábrica de personajes
class CharacterFactory {
    public static function create($level) {
        if ($level == "easy") {
            return new Skeleton();
        } elseif ($level == "hard") {
            return new Zombie();
        }
        return null;
    }
}

// Uso del Factory Pattern
$level = $_GET['level'] ?? 'easy';
$character = CharacterFactory::create($level);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Factory Pattern</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Personaje generado:</h2>
        <p><strong>Ataque:</strong> <?= $character->attack(); ?></p>
        <p><strong>Velocidad:</strong> <?= $character->speed(); ?></p>
    </div>
</body>
</html>
