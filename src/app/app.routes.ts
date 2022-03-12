import {Router, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ParqueaderoComponent} from "./components/parqueadero/parqueadero.component";
import {ConversorComponent} from "./components/conversor/conversor.component";

const APP_ROUTES: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'parqueadero',component:ParqueaderoComponent},
  {path: 'ejercicio2',component:ConversorComponent},
  {path: '**',pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
