<?php
// Interfaz para salida
interface OutputStrategy {
    public function display($message);
}

// Estrategia para consola
class ConsoleOutput implements OutputStrategy {
    public function display($message) {
        return "<pre>Consola: " . $message . "</pre>";
    }
}

// Estrategia para JSON
class JsonOutput implements OutputStrategy {
    public function display($message) {
        return json_encode(["message" => $message]);
    }
}

// Estrategia para archivo TXT
class TxtOutput implements OutputStrategy {
    public function display($message) {
        file_put_contents("output.txt", $message);
        return "Mensaje guardado en output.txt";
    }
}

// Manejador de estrategia
class MessageHandler {
    private $strategy;

    public function setStrategy(OutputStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function displayMessage($message) {
        return $this->strategy->display($message);
    }
}

// Uso del patrón
$message = "Hola, este es un mensaje!";
$type = $_GET['type'] ?? 'console';

$handler = new MessageHandler();
if ($type == 'json') {
    $handler->setStrategy(new JsonOutput());
} elseif ($type == 'txt') {
    $handler->setStrategy(new TxtOutput());
} else {
    $handler->setStrategy(new ConsoleOutput());
}

$output = $handler->displayMessage($message);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Strategy Pattern</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Salida del mensaje:</h2>
        <p><?= $output; ?></p>
    </div>
</body>
</html>
