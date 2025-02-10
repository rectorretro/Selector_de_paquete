function Paquete (nombre,precio,velocidad,tv,smart_tablet,pc,consola,simetrico,router){
    this.nombre = nombre;
    this.precio = precio;
    this.velocidad = velocidad;
    this.tv = tv;
    this.smart_tablet = smart_tablet;
    this.pc = pc;
    this.consola = consola;
    this.router = router;
    this.simetrico = simetrico;
}




function no_simetrico(paquetes,dispositivos){  
    let bandera = 0;  
    bandera = ((dispositivos.get('tv')*8) + (dispositivos.get('smart_tablet')) + (dispositivos.get('pc')*5) + (dispositivos.get('consola')*3))
    bandera >= 1 & bandera <= 18 ? Paquete_electo(BLite) :  (
    bandera >= 19 & bandera <= 32 ? Paquete_electo(Mbr) : (
    bandera >= 33 & bandera <= 49 ? Paquete_electo(Ir) : (
    bandera >= 50 & bandera <= 62 ? Paquete_electo(Gr) : console.log(bandera))))
}


function simetrico(paquetes,dispositivos){    
    let bandera = 0;
    bandera = ((dispositivos.get('tv')*8) + (dispositivos.get('smart_tablet')) + (dispositivos.get('pc')*5) + (dispositivos.get('consola')*3))
    bandera >= 1 & bandera <= 18 ? Paquete_electo(Mbpc) : (
        bandera >= 19 & bandera <= 32 ? Paquete_electo(Mbpc) : (
            bandera >= 33 & bandera <= 49 ? Paquete_electo(Ipc) : (
            bandera >= 50 & bandera <= 62 ? Paquete_electo(Pc) : (
            bandera >= 63 & bandera <= 999 ? Paquete_electo(Gc) : console.log(bandera))))

    )
    
}


function Paquete_electo(paquete){
    document.querySelector('#fibra').innerHTML  = 
    `<div class = 'paquete'>
    <h2><span> ${paquete.nombre} </span></h2>
    <p class = 'velocidad'> ${paquete.velocidad} Mbps ${paquete.simetrico ? 'simetricos!!!': ''}</p>
    <p class='precio'> $${paquete.precio}.00 Mx </p>
    <p>${paquete.router ? 'Incluye un segundo router para mejor covertura':''}</p>
    </div>
    `
    ;
}

const dispositivos = new Map([['tv',0],['smart_tablet',8],['pc',0],['consola',0],['simetrico',false],['router',true]]);

const BLite = new Paquete('Basico Lite',390,30,1,5,1,0,false,false); ///18

const Mbr = new Paquete('Medium basico residencial',490,50,2,6,2,0,false,false);//32

const Mbpc = new Paquete('Medium basico plus comercial',690,50,2,6,2,0,true,true);//32

const Ir = new Paquete('Intermedio recidencial',690,70,3,8,3,1,false,true);//50

const Ipc = new Paquete('Intermedio pro comercial',690,70,3,8,3,1,true,true);//50

const Gr =new Paquete('Gamer residencial',990,100,4,10,3,2,false,true);//63

const Pc =new Paquete('Premium comercial',990,100,4,10,3,2,true,true);//63

const Gc = new Paquete('Gold comercial',1500,150,5,15,5,5,true,true);//<36

const P_no_simetricos = [BLite,Mbr,Ir,Gr];
const P_simetricos = [Mbpc,Ipc,Pc,Gc]

const Paquetes = [].concat(P_no_simetricos,P_simetricos);


/**
 * Inalabricos
 * 3 - 350
 * 4 - 450
 * 5 - 500
 */



//no_simetrico(Paquetes,dispositivos);

//console.log(dispositivos.get('simetrico'))
//no_simetrico(P_no_simetricos,dispositivos);
document.querySelector('#coco').onclick = function(){
    var antes = document.querySelector('#antes');
    antes.style.display = 'none';
    console.log('coco')
}   

document.querySelector('#munch').onclick = function(){
    var antes = document.querySelector('#antes');
    antes.style.display = 'none';
    console.log('munch')
}   
document.querySelector('#boton_selector_f').onclick = function(){
    
    var checkValue 
    //document.querySelector('.check_punto').value != 1 ? checkValue = false : checkValue = true;
    console.log(document.querySelector('.check_punto').checked);
    var ct = 0;
    var pisos = parseInt(document.querySelector('#router_f').value);
    ct = parseInt(document.querySelector('#celular_f').value);
    ct = ct + parseInt(document.querySelector('#tablet_f').value);
    //console.log(ct);
    dispositivos.set('tv',parseInt(document.querySelector('#tv_f').value));
    dispositivos.set('smart_tablet',ct);
    dispositivos.set('pc',parseInt(document.querySelector('#pc_f').value));
    dispositivos.set('consola',parseInt(document.querySelector('#consola_f').value))

    pisos >=2 || document.querySelector('.check_punto').checked? dispositivos.set('router',true) : dispositivos.set('router',false); 
    dispositivos.set('simetrico',dispositivos.get('router'))
    
    dispositivos.get('simetrico') ? simetrico(P_simetricos,dispositivos) : no_simetrico(P_no_simetricos,dispositivos)// ;
    document.querySelector('#boton_selector_f').innerHTML= `Generar otra opción`;
    /*dispositivos.get('tv') == 1 & dispositivos.get('smart_tablet') == 5 & dispositivos.get('pc') == 1  & dispositivos.set('consola') == 0 ? Paquete_electo(BLite) : (
        dispositivos.get('simetrico') ? simetrico(P_simetricos,dispositivos) : no_simetrico(P_no_simetricos,dispositivos)// ;
    )*/
    
}




//Paquetes.forEach((paquete) => console.log(paquete.tv));
//condition ? <expression if true> : <expression if false>




//4 <= dispositivos.get('tv') ? Paquete_electo(Pc): Paquete_electo(Gr);
//3 <= dispositivos.get('tv') ? Paquete_electo(Ipc): Paquete_electo(Ir);
//2 <= dispositivos.get('tv') & dispositivos.get('router') ? Paquete_electo(Mbpc): Paquete_electo(Mbr);
//1 == dispositivos.get('tv') ? Paquete_electo(BLite) : Paquete_electo(BLite);





