function mensaje() {
    alert('hola mundo');
}

function validar() {
    var resp = validarRut();
    if (resp==false){
        return false;
    }
    return true;
}

function validarRut(){

    var rut= document.getElementById('txtRut').value;
    if (rut.length !=10 ) {
        //alert('largo de rut incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'largo de rut incorrecto!'
          });
        return false;
    }
    var suma=0;  
    var num = 3;
    for (let index = 0; index < 8; index++) {
        var caracter= rut.slice(index,index+1);
        //alert(caracter+' x '+num);
        suma=suma+(caracter * num)
        num=num-1;
        if (num == 1) {
            num=7;
        }
    }
    //alert('Suma:'+suma);
    var resto= suma % 11;
    //alert('Resto:'+resto);
    var dv= 11-resto;
    if (dv > 9) {
        if (dv == 10) {
            dv='K';
        }else{
            dv=0;
        }
    }
    //alert('DV:'+dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario ) {
        //alert ('rut incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'rut incorrecto!'
          });
        return false;
    }else{
        //alert('rut correcto');
        Swal.fire({
            icon: 'success',
            title: 'rut correcto',
            showConfirmButton: false,
            timer: 1500
          })
        return true;
    }
}   

