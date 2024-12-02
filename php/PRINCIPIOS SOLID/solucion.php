<?php 
    // Los modulos de alto nivel no deben depender de los de bajo nivel
    // ambos deben de depender de abstracciones y estas de detalles

    interface IAdaptador{
        function connect();
    }
    class ConexionBD{
        private $adaptador;

        function __construct(IAdaptador $adaptadorParam){
            $this->adaptador = $adaptadorParam;
        }

        function conectarBD(){
            $this->adaptador->connect();
         
        }
    }

    class MySQL implements IAdaptador{
        function connect(){
            // conexion a la bd
        }
    }

    class FireStore  implements IAdaptador{
        function connect(){

        }
    }


    $mybd = new MySQL();

    $conexionCita = new ConexionBD($mybdsql);
    $conexionCita = new ConexionBD($myfirestore);
?>