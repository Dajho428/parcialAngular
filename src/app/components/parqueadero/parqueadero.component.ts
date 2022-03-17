import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent {
  tarifa:number=0;
  horas:number=0;
  sistema= Date.now();

  calcularCargos(ingreso:string):number{
    this.tarifa=2000;
    this.horas=0;
    let fechaIngreso=new Date(ingreso);
    //let fechaSalida=new Date(salida);
    let fechaSistema=new Date(this.sistema);
    if(this.validarFechas(fechaIngreso,fechaSistema)==true){
      this.horas=0;
      alert("No puedes elegir una fecha superior a la del sistema");

    }else{
      // alert(fechaSistema)
      this.horas=Math.abs(Math.round(((fechaSistema.getTime()-fechaIngreso.getTime())/1000)/3600)) ;
      // alert(this.horas)
      if (this.horas==24) return this.tarifa=10000;
      else if (this.horas>3 && this.horas <24) return (this.tarifa+=(this.horas-3)*500);
      else if (this.horas > 24) {
        this.horas=0;
        alert("No puede pasar de 24 horas");
      }
      else if(this.horas>0 && this.horas<=3)return this.tarifa;
      else alert("Ingresa horas validas no dejes el espacio en blanco");
    }
    return this.tarifa=0;
  }

  validarFechas(fechaIngreso:Date,fechaSistema:Date):boolean{
    if(fechaIngreso>fechaSistema){
      return true;
    }
    return false;
  }

}
