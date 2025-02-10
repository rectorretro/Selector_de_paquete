function Inalambricos (nombre,precio,velocidad,instalacion,tv,smart_tablet,pc,consola,router){
    this.nombre = nombre;
    this.precio = precio;
    this.velocidad = velocidad;
    this.instalacion = instalacion;
    this.tv = tv;
    this.smart_tablet = smart_tablet;
    this.pc = pc;
    this.consola = consola;
    this.router = router;
}


function electo(d){  
    console.log(d)  
    
    let bandera = 0;
    bandera = ((d.get('tv')*3) + (d.get('smart_tablet')) + (d.get('pc')*2) + (d.get('consola')*2))
    console.log(bandera)
    bandera >= 1 & bandera <= 3 ? Paquete_ina(basico) : (
        bandera >= 4 & bandera <= 5 ? Paquete_ina(medio) : (
            bandera >=6 & bandera <= 99 ? Paquete_ina(alto) : (
            bandera >= 50 & bandera <= 62 ? Paquete_ina(alto) : (
            bandera >= 63 & bandera <= 999 ? Paquete_ina(alto) : console.log(bandera))))

    )
    
}

const dis_ina = new Map([['tv',0],['smart_tablet',0],['pc',0],['consola',0],['router',true]]);

const basico = new Inalambricos('Básico',350,5,1350,1,3,1,1,false);
const medio = new Inalambricos('Medio',400,7,1350,1,4,1,1,false);
const alto = new Inalambricos('Alto',350,10,1350,1,5,1,1,false);





function Paquete_ina(paquete){
    console.log(paquete.nomnbre)
    dis_ina.get('router') ? paquete.instalacion = 2350 : paquete.instalacion = 1350// ;*/
    document.querySelector('#inalambrico').innerHTML  = 
    `<div class = 'paquete'>
    <h2><span> ${paquete.nombre} </span></h2>
    <p class = 'velocidad'> ${paquete.velocidad} Mbps </p>
    <p class='precio'> $${paquete.precio}.00 Mx </p>
    <p>Coste de instalacion: $${paquete.instalacion}</p>
    </div>
    `
    ;
}

document.querySelector('#boton_selector').onclick = function(){
    
    //document.querySelector('.check_punto').value != 1 ? checkValue = false : checkValue = true;
    var ct = 0;
    var prestado = document.querySelector('#prestado');
    //console.log(prestado.value)
    prestado.value == 0 ? dis_ina.set('router',false): dis_ina.set('router',true);
    ct = parseInt(document.querySelector('#celular').value);
    ct = ct + parseInt(document.querySelector('#tablet').value);

    //console.log(ct);
    dis_ina.set('tv',parseInt(document.querySelector('#tv').value));
    dis_ina.set('smart_tablet',ct);
    dis_ina.set('pc',parseInt(document.querySelector('#pc').value));
    dis_ina.set('consola',parseInt(document.querySelector('#consola').value))
    /*d.set('router',)*/

    
    
    electo(dis_ina);
    document.querySelector('#boton_selector').innerHTML= `Generar otra opción`;
    /*d.get('tv') == 1 & d.get('smart_tablet') == 5 & d.get('pc') == 1  & d.set('consola') == 0 ? Paquete_electo(BLite) : (
        d.get('electo') ? electo(P_electos,d) : no_electo(P_no_electos,d)// ;
    )*/
    
}