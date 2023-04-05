import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogincComponent } from './loginc/loginc.component';
import { AdminComponent } from './admin/admin.component';
import { JudgeComponent } from './judge/judge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    WeatherComponent,
    LoginComponent,
    TestComponent,
    TodoComponent,
    LogincComponent,
    AdminComponent,
    JudgeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'form' , component : FormComponent},
      {path:'list' , component : ListComponent},
      {path:'weather' , component : WeatherComponent},
      {path:'login' , component :LoginComponent},
      {path:'test' , component :TestComponent},
      {path:'todo' , component :TodoComponent},
      {path:'loginc' , component :LogincComponent},
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(arg0: never[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

