
<?php 

    //Estructuras de datos
    //Arrays
    
    //Declaraciones de arrays
    //Inicializacion a traves de constructor de objeto
    $array = new ArrayObject();
   
    //Declaracion de array literal
    $array = [];

    //Declaracion de array a traves de un metodo
    $array = array();

    // CLASES Y OBJETOS
    class Persona{
    public $nombre;
    public $edad;
    
    // Constructor
    public function __construct($nombreParam,$edadParam){
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    // Metodos
    function respirar(){
        return "respiranding";
    }

    }

    $personita = new Persona("Jairo",22);
    print_r($personita);
    print_r("$personita->nombre\n");
    print_r($personita->respirar());
    // Stack (pila) -> LIFO LastInFirstOut

    class Stack{
        public $stack;

        function __construct(){
            $this->stack = array();
        }

        function addValue($value){
            array_push($this->stack,$value);
        }

        function removeValue(){
            // array_pop elimina la ultima la ultima posicion
            array_pop($this->stack);

        }
    }

    $pilaRopa = new Stack();
    $pilaRopa->addValue("Camiseta");
    $pilaRopa->addValue("Boxers");
    $pilaRopa->addValue("Chanclas");
    $pilaRopa->addValue("Colchas");
    $pilaRopa->removeValue();
    print_r($pilaRopa);
?> 
