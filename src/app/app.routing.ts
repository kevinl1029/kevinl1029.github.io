import { Routes, RouterModule } from "@angular/router";
import { InputComponent } from "app/input/input.component";
import { CellcountComponent } from "app/cellcount/cellcount.component";
import { BoxSelectComponent } from "app/cellcount/boxselect.component";
import { OutputComponent } from "app/output/output.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/input', pathMatch: 'full' },
  {path: 'input', component: InputComponent},
  {path: 'boxselect', component: BoxSelectComponent},
  {path: 'cellcount', component: CellcountComponent},
  {path: 'results', component: OutputComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
