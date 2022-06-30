var codigo = [];
var nombre = [];
var cantidad = [];
var precio = [];


function guardar(){
    
    var Cod = (document.getElementById("inputCod")).value;
    var Nombre = (document.getElementById("inputNombre")).value;
    var Cant = (document.getElementById("inputCant")).value;
    var Precio = (document.getElementById("inputPrecio")).value;
    
    var mostrar = "";

    codigo.push(parseInt(Cod));
    nombre.push(Nombre);
    cantidad.push(Cant);
    precio.push(Precio);

    for (let i = 0; i < codigo.length; i++) {
        mostrar += '<tr>';
        mostrar += '<th>'+codigo[i]+'</th>';
        mostrar += '<td>'+nombre[i]+'</td>';
        mostrar += '<td>'+cantidad[i]+'<td>';
        mostrar += '<td>'+precio[i]+'<td>';
        mostrar += '<td>'+'<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick="modal('+codigo[i]+')">Ver</button>'+'<td>';
        mostrar += '</tr>';
        

        document.getElementById("table1").innerHTML=mostrar;
    }



}
function resetForm() {
    document.getElementById("formul").reset();
}

function modal(Cod){
    let index = codigo.indexOf(Cod);
    var mostrar ="";
            mostrar += '<tr>';
            mostrar += '<th>'+codigo[index]+'</th>';
            mostrar += '<td>'+nombre[index]+'</td>';
            mostrar += '<td>'+cantidad[index]+'<td>';
            mostrar += '<td>'+precio[index]+'<td>';
            mostrar += '</tr>';

            document.getElementById("table2").innerHTML=mostrar;
}






     
     
      




