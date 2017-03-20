import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { InputComponent } from './input/input.component';
import { BoxSelectComponent } from './cellcount/boxselect.component';
import { CellcountComponent } from './cellcount/cellcount.component';
import { OutputComponent } from './output/output.component';
import { CellcomputeService } from "app/cellcompute.service";
import { routing } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    BoxSelectComponent,
    CellcountComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CellcomputeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
