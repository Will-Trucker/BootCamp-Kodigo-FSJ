<?php 

    //Importar un archivo
    // include -> Traer codigo del archivo, SI ALGO FALLA? Da una advertencia y sigue ejecutando el programa
    // require -> Traer codigo del archivo, SI ALGO FALLA? Da un error y frena la ejecucion
    require('./aerolinea.php');
    session_start();
    
    if(!isset($_SESSION['aerolineas'])){
        $_SESSION['aerolineas'] = [];
    }

    $aerolineas =  $_SESSION['aerolineas'] ;

    if(isset($_POST['nombre'],$_POST['cantAviones'],$_POST['tipoAerolinea'])){
        //print_r($_POST);

        $id = count($aerolineas)+1;
        $nombre = $_POST['nombre'];
        $cantAviones = $_POST['cantAviones'];
        $tipo = $_POST['tipoAerolinea'];

        $aerolinea = new Aerolinea($id,$nombre,$cantAviones,$tipo);
        //print_r($aerolinea);
        array_push($aerolineas,$aerolinea);
        //echo "<br/>";
        $_SESSION['aerolineas'] = $aerolineas;
        header('Location: ./BootCamp-Kodigo-FSJ/php/aerolinea_project/');
    }
    
    //print_r($aerolineas);

    function getAirline($id,$aerolineas){
        foreach($aerolineas as $aerolinea){
            if($aerolinea->getId() == $id ){
                return $aerolinea;
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Aerolinea</title>
</head>
<body>
    <h1>Holiwis</h1>
    <?php 
        if(isset($_GET['edit'])){
            $aerolineaEdit = getAirline($_GET['edit'],$aerolineas);
            print_r($aerolineaEdit);
        }
    ?>
    <form method="POST" action="">
        <label>Nombre Aerolinea</label>
        <input type="text" name="nombre">

        <label>Cantidad de Aviones</label>
        <input type="text" name="cantAviones">

        <label>Tipo de Aerolinea</label>
        <select name="tipoAerolinea">
            <option value="Comercial">Comercial</option>
            <option value="Privado">Privado</option>
            <option value="Carga">Carga</option>
        </select>

        <button type="submit">Registrar Aerolinea</button>
    </form>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad Aviones</th>
                    <th>Tipo Aerolinea</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            <?php 
            foreach($aerolineas as $aerolinea){
                echo"
                <tr>
                <td>{$aerolinea->getId()}</td>
                <td>{$aerolinea->getNombre()}</td>
                <td>{$aerolinea->getCant_Aviones()}</td>
                <td>{$aerolinea->getTipo_Aerolinea()}</td>
                <td><a href='?edit={$aerolinea->getId()}'>Editar</a>
                    <a href='?'>Eliminar</a>
                </td>
            </tr>";
            }
            ?>
            </tbody>
        </table>
    </main>
</body>
</html>