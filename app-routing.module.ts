import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './loginc/auth.guard';
import { LogincComponent } from './loginc/loginc.component';

const routes: Routes = [
  { path: 'loginc', component: LogincComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
