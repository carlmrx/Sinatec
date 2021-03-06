$(document).ready(function() {
    var estacion = "no";
    var checkbox = document.getElementById('test');
    checkbox.addEventListener("change", validaCheckbox, false);
    var estacion;

    function validaCheckbox() {
        var checked = checkbox.checked;
        if (checked) {

            alert('Se leccionaste que perteneses a las estaciones de servicio etc........');
            estacion = "si";
        }
    }
    $('#reset').click(function() {
        $('#frmRegistro')[0].reset();
    })

    $('#registrarNuevo').click(function() {

        if ($('#nombre').val() == "") {
            alert("Debes agregar el nombre");
            return false;
        } else if ($('#apellido').val() == "") {
            alert("Debes agregar el apellido");
            return false;
        } else if ($('#curp').val() == "") {
            alert("Debes agregar el curp");
            return false;
        } else if ($('#rfc').val() == "") {
            alert("Debes agregar el rfc");
            return false;
        } else if ($('#correo').val() == "") {
            alert("Debes agregar un coreo de contacto");
            return false;
        } else if ($('#telefono').val() == "") {
            alert("Debes agregar un telefono de contacto");
            return false;
        } else if ($('#texto').val() == "") {
            alert("Por favor da mas detalles de el problema para ayudarle");
            return false;
        }

        cadena = "nombre=" + $('#nombre').val() +
            "&apellido=" + $('#apellido').val() +
            "&curp=" + $('#curp').val() +
            "&rfc=" + $('#rfc').val() +
            "&folio=" + $('#folio').val() +
            "&estacion=" + estacion +
            "&correo=" + $('#correo').val() +
            "&telefono=" + $('#telefono').val() +
            "&texto=" + $('#texto').val();

        $.ajax({
            type: "POST",
            url: "php/registro.php",
            data: cadena,
            success: function(r) {
                if (r == 1) {
                    $('#frmRegistro')[0].reset();
                    window.location = "tiket.html";
                } else {
                    alert("Fallo al agregar");
                }
            }
        });
    });
});