import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableTestComponent} from './table-test/table-test.component'
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'app-table-test',component: TableTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
