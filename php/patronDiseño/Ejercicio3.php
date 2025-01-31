<?php
// Interfaz base para personajes
interface Character {
    public function attack();
}

// Implementación básica
class BasicCharacter implements Character {
    public function attack() {
        return "Ataque básico.";
    }
}

// Decorador base
abstract class WeaponDecorator implements Character {
    protected $character;
    
    public function __construct(Character $character) {
        $this->character = $character;
    }
}

// Decorador con espada
class Sword extends WeaponDecorator {
    public function attack() {
        return $this->character->attack() . " Ahora con espada!";
    }
}

// Decorador con arco
class Bow extends WeaponDecorator {
    public function attack() {
        return $this->character->attack() . " Ahora con arco!";
    }
}

// Uso del patrón
$character = new BasicCharacter();
$weapon = $_GET['weapon'] ?? 'sword';

if ($weapon == 'sword') {
    $character = new Sword($character);
} else {
    $character = new Bow($character);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Decorator Pattern</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Personaje con arma:</h2>
        <p><?= $character->attack(); ?></p>
    </div>
</body>
</html>
