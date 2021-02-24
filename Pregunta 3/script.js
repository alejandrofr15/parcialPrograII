function newRow() {

    var Username = document.getElementById("name").value;
    var Contrasenia = document.getElementById("pssw").value;
    var Option = document.getElementById("option").value;
    var table = document.getElementById("tabla");
    var lengt = table.rows.length;

    var bool = true;

    for (var c = 0; c < lengt; c++) {
        if((tabla.rows[c].cells[0].innerHTML == Username) && (tabla.rows[c].cells[1].innerHTML == Contrasenia) ){
            bool = false;}
    }
          
            
    var row = table.insertRow(lengt);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = Username;
    cell2.innerHTML = Contrasenia;
    cell3.innerHTML = Option;

    if (bool == true) {
        cell4.innerHTML = "NUEVO";
    }
    
    else{
        cell4.innerHTML = "EXISTE";
    }
    
    

}


