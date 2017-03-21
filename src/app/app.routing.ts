import { Routes, RouterModule } from "@angular/router";
import { InputComponent } from "app/input/input.component";
import { CellcountComponent } from "app/cellcount/cellcount.component";
import { BoxSelectComponent } from "app/cellcount/boxselect.component";
import { OutputComponent } from "app/output/output.component";

const APP_ROUTES: Routes = [
  {path: 'cellcount/:id', component: CellcountComponent},
  {path: '', redirectTo: '/input', pathMatch: 'full'},
  {path: 'input', component: InputComponent},
  {path: 'boxselect', component: BoxSelectComponent},
  {path: 'results', component: OutputComponent}
] 

export const routing = RouterModule.forRoot(APP_ROUTES);
