<?php
// Interfaz para los archivos
interface File {
    public function open();
}

// Archivo en Windows 7
class Windows7File implements File {
    public function open() {
        return "Archivo abierto en Windows 7.";
    }
}

// Adaptador para Windows 10
class Windows10Adapter implements File {
    private $win7File;

    public function __construct(Windows7File $file) {
        $this->win7File = $file;
    }

    public function open() {
        return "Archivo convertido y abierto en Windows 10: " . $this->win7File->open();
    }
}

// Uso del Adapter Pattern
$win7File = new Windows7File();
$adapter = new Windows10Adapter($win7File);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Adapter Pattern</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Compatibilidad de archivos</h2>
        <p><?= $adapter->open(); ?></p>
    </div>
</body>
</html>
