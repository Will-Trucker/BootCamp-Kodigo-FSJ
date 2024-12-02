<?php 

    // Clase abierta para extension y cerrada para modificacion
    interface IAuto{
        function aumentarVelocidad();
        function disminuirVelocidad();
    }

    class PilotoF1{
        function acelerar(Iauto $auto){
            $auto->aumentarVelocidad();
        }

        function frenar(Iauto $auto){
            $auto->disminuirVelocidad()();
        }
    }

    class RedBull implements IAuto{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 30;
        }

        function disminuirVelocidad(){
            $this->vel -= 30;
        }
    }

    class Mercedes implements IAuto{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 20;
        }

        function disminuirVelocidad(){
            $this->vel -= 20;
        }
    }

    class Kick implements Iauto{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 2;
        }

        function disminuirVelocidad(){
            $this->vel -= 2;
        }
    }
?>