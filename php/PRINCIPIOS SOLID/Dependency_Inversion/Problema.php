<?php 
    // Los modulos de alto nivel no deben depender de los de bajo nivel
    // ambos deben de depender de abstracciones y estas de detalles

    class ConexionBD{
        private $adaptador;
        private $adaptador2;

        function __construct(){
            $this->adaptador = new MySQL();
            $this->adaptador2 = new FireStore();
        }

        function conectarBD(){
            $this->adaptador->connect();
            $this->adaptador2->connect();
        }
    }

    class MySQL{
        function connect(){
            // conexion a la bd
        }
    }

    class FireStore{
        function connect(){

        }
    }
?>