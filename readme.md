# 1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data

## Entrada

Arreglo de arreglos

## Salida

Arreglo de cadenas de texto

## Proceso

1.  Tomo el primer elemento

    a. Combino el elemento 1 y el elemento 2 de este arreglo en una
    cadena

2.  Repito hasta terminar

Se escoge map porque nos devuelve un arreglo con la misma cantidad de
elementos que el original

# 2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista

## Entrada

Array de arrays

## Salida

edad mayor

edad menor

## Proceso

1.  Tomo el primer elemento del arreglo

2.  Del primer elemento tomo el tercer elemento dentro del mismo\[2\]

3.  Establezco este elemento como la edad mayor y la edad menor

4.  Repito con siguiente elemento

    a. Es mayor que el mayor?

        i.  Se convierte en el mayor

    b. Es menor que el menor?

        i.  Se convierte en el menor

5.  Repito hasta terminar el arreglo

6.  Devuelvo el mayor y el menor

# 3.- Necesitamos reestructurar la data para que quede de la siguiente forma:

\[{

name:

lastname:

age

}\]

## Entrada

Arreglo de arreglos

## Salida

Arreglo de objetos

## Proceso

1.  Tomo primer arreglo

2.  Creo un objeto

    a. asigno la propiedad name al primer elemento del arreglo

    b. asigno la propiedad lastname al segundo elemento del arreglo

    c. asigno la propiedad age al tercer elemento del arreglo

3.  Repito hasta terminar todos los arreglos

4.  Devuelvo el arreglo de objetos
