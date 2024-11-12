<?php
function contarFrecuenciaCaracteres($cadena) {
    $frecuencia = []; // Iniciar un array vacio

    // Convertir a un array de caracteres
    $caracteres = str_split($cadena);

    foreach ($caracteres as $caracter) {
        // si ya esta en el array, incrementamos
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            // Si no lo encuentra devuelve esto
            $frecuencia[$caracter] = 1;
        }
    }

    return $frecuencia; // Devolvemos el array
}


$texto = "Todas Mienten";
$frecuenciaCaracteres = contarFrecuenciaCaracteres($texto);

echo "Frecuencia de caracteres en la cadena: \n";
print_r($frecuenciaCaracteres);
?>