import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'reg', component : RegisterComponent},
  {path : 'log', component : LoginComponent},
  {path : 'edit/:empid', component : EditComponent},
  {path : 'up', component : UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
