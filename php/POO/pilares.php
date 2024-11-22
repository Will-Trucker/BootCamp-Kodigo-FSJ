<?php
// Pilares POO -> Buenas practicas que mejoran Legibilidad, Escalabilidad y  
//  Bases que cimentan el tipo de poo que pueden replicarse/derivarse
//  Lo fundamental del paradigma(forma)
// Forma de organizar nuestro codigo 
// Herramientas para poder reutilizar el codigo

//Cuales son los 4 pilares?
/*
    Encapsulamiento X
    Abstraccion X
    Herencia
    Polimorfismo
*/
class Persona
{
    private $nombre;

    function __construct($nombreParam)
    {
        $this->nombre = $nombreParam;
    }

    function respirar()
    {
        // INCREIBLE, RESPIRO
        print ("Estoy respirando Ifff");
    }

    //Getters y Setters 
    function getNombre()
    {
        return $this->nombre;
    }

    function setNombre($nombreParam)
    {
        $this->nombre = $nombreParam;
    }

}

class Programador extends Persona
{
    private $chichara;
    private $lenguajesProgramacion;
    private $estado;

    function __construct($nombre, $pcParam, $lenguajesProgramacionParam, $estadoParam = "activo")
    {
        parent::__construct($nombre);
        $this->estado = $estadoParam;
        $this->chichara = $pcParam;
        $this->lenguajesProgramacion = $lenguajesProgramacionParam;
    }

    function respirar()
    {
        print ("No respiro la presion");
    }

    public function getChicharra()
    {
        return $this->chichara;
    }

    public function setChicharra($chichara)
    {
        $this->chichara = $chichara;
    }

    public function getLenguajesProgramacion()
    {
        return $this->lenguajesProgramacion;
    }

    public function setLenguajesProgramacion($lenguajesProgramacion)
    {
        $this->lenguajesProgramacion = $lenguajesProgramacion;
    }

    public function getEstado()
    {
        return $this->estado;
    }

    public function setEstado($estado)
    {
        $this->estado = $estado;
    }

}

$programador1  = new Programador("Luis Ernesto","La Maquina",["Javascript","Typescript","PHP"],"inactivo");
$programador2  = new Programador("Carlos Samuel","La Bestia" ,["Javascript","Typescript","PHP"]);
print_r($programador1);
print_r($programador2);
$programador1->respirar();
echo "\n";
$programador2->respirar();

?>