function move(array, p1, p2)
{
    let aux = array[p1];
    array[p1] = array[p2];
    array[p2] = aux;
    return array;
}