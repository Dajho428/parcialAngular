import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  conversionGradFahren: number = 0;
  conversionFahrenGrad:number=0;

  getCentigradosFahrenheit(gradosCentigrados:number){
    this.conversionGradFahren=(9.0/5.0*gradosCentigrados+32);
  }

  getFahrenheitCentigrados(gradosFahrenheit:number){
    this.conversionFahrenGrad=( 5.0 / 9.0 * (gradosFahrenheit - 32));
  }

}
