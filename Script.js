var codigo = [];
var nombre = [];
var cantidad = [];
var precio = [];

function guardar(){
    
    var Cod = (document.getElementById("inputCod")).value;
    var Nombre = (document.getElementById("inputNombre")).value;
    var Cant = (document.getElementById("inputCant")).value;
    var Precio = (document.getElementById("inputPrecio")).value;
 

    codigo.push(parseInt(Cod));
    nombre.push(Nombre);
    cantidad.push(Cant);
    precio.push(Precio);
}

function mostrar() {

    if (codigo.length == 0) {
        location.href = "index.html";
    }
    var mostrar = "";

    mostrar += '<thead>';
    mostrar += '<tr>';
    mostrar += '<th>'+'<label>codigo</label>'+'</th>';
    mostrar += '<th>'+'<label>Nombre</label>'+'</th>';
    mostrar += '<th>'+'<label>Cantidad</label>'+'</th>';
    mostrar += '<th>'+'<label>Precio</label>'+'</th>';
    mostrar += '<th>'+'<label>Revisar</label>'+'</th>';
    mostrar += '<th>'+'<label>Eliminar</label>'+'</th>';
    mostrar += '</tr>';
    mostrar += '</thead>';

    

    for (let i = 0; i < codigo.length; i++) {
        
        mostrar += '<tr>';
        mostrar += '<th>'+codigo[i]+'</th>';
        mostrar += '<td>'+nombre[i]+'</td>';
        mostrar += '<td>'+cantidad[i]+'</td>';
        mostrar += '<td>'+precio[i]+'</td>';
        mostrar += '<td>'+'<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick="modal('+codigo[i]+')"><i class="fa-brands fa-searchengin"></i></button>'+'</td>';
        mostrar += '<td>'+'<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="fa-brands fa-searchengin"></i></button>'+'</td>';
        mostrar += '</tr>';
        
        document.getElementById("table1").innerHTML=mostrar;
    }

}


function resetForm() {
    document.getElementById("formul").reset();
    
}

function modal(Cod){
    let index = codigo.indexOf(Cod);
    (document.getElementById("inputId")).value = codigo[index];
    (document.getElementById("inputNom")).value = nombre[index];
    (document.getElementById("inputCantidad")).value = cantidad[index];
    (document.getElementById("input_precio")).value = precio[index];

    
}


function cargar(Cod){
    let index = codigo.indexOf(parseInt(Cod));
    nombre[index] = (document.getElementById("inputNom")).value;
    cantidad[index] = (document.getElementById("inputCantidad")).value;
    precio[index] = (document.getElementById("input_precio")).value;

    mostrar();
}

function onDelete(Cod) {

    let index = codigo.indexOf(Cod);
    codigo.splice(index, 1);
    nombre.splice(index, 1);
    cantidad.splice(index, 1);
    precio.splice(index, 1);

    mostrar();
    
        
}



     
     
      




