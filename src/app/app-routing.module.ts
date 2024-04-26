import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { AuthGuard } from './components/first/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '1', pathMatch:'full' },
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent, canActivate: [AuthGuard] },
  // other routes...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
