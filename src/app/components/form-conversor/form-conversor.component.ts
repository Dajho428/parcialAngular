import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-conversor',
  templateUrl: './form-conversor.component.html',
  styleUrls: ['./form-conversor.component.css']
})
export class FormConversorComponent{

  @Output()  gradosCentigrados= new EventEmitter<number>();
  @Output()  gradosFahrenheit=new EventEmitter<number>();

  conversionCentigradosFahrenheit:number=0;
  conversionFahrenheitCentigrados:number=0;

  getGragosCentigradosFahrenheit(){
    this.gradosCentigrados.emit(this.conversionCentigradosFahrenheit);
  }
  getFahrenheitCentigrados(){
    this.gradosFahrenheit.emit(this.conversionFahrenheitCentigrados);
  }
}
