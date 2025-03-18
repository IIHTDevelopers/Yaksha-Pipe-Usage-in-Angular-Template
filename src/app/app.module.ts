import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipeExampleComponent } from './components/date-pipe-example/date-pipe-example.component';
import { CurrencyPipeExampleComponent } from './components/currency-pipe-example/currency-pipe-example.component';
import { DecimalPipeExampleComponent } from './components/decimal-pipe-example/decimal-pipe-example.component';
import { PercentPipeExampleComponent } from './components/percent-pipe-example/percent-pipe-example.component';
import { StringPipesExampleComponent } from './components/string-pipes-example/string-pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeExampleComponent,
    CurrencyPipeExampleComponent,
    DecimalPipeExampleComponent,
    PercentPipeExampleComponent,
    StringPipesExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
