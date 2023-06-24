(function(){
    var verHora = function() {
        var actual = new Date();
        var hora = actual.getHours();
        var minutos = actual.getMinutes();
        var diasemana = actual.getDay();
        var dias = actual.getDate();
        var meses = actual.getMonth();
        var años = actual.getFullYear();
        var ampm = "";
    
        var mostrarHora = document.getElementById('hora');
        var mostrarMinuto = document.getElementById('minuto');
        var mostrarAmpm = document.getElementById('ampm');
        var mostrardia = document.getElementById('dia');
        var mostrardiasemana = document.getElementById('dia-semana');
        var mostrarmes = document.getElementById('mes');
        var mostraraño = document.getElementById('año');

        var verdias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var vermeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    
        if (hora >= 12) {
            hora = hora - 12;
            ampm = "p.m."
        } else {
            ampm = "a.m."
        }
    
        if (hora == 0) {
            hora = 12;
        }


        if (10 > minutos) {
            minutos= "0"+ minutos;
        }

        mostrarHora.textContent = hora;
        mostrarMinuto.textContent = minutos;
        mostrarAmpm.textContent = ampm;

        mostrardiasemana.textContent = verdias[diasemana];
        mostrardia.textContent = dias;
        mostrarmes.textContent = vermeses[meses];
        mostraraño.textContent = años;

    }
    verHora(); 
    var intervalo = setInterval(verHora, 1000);       
}())
