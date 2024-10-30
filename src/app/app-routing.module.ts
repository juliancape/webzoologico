import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {path : 'animal', component: AnimalComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
