import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlueComponent } from './page-blue/page-blue.component';
import { PageGreenComponent } from './page-green/page-green.component';
import { PageRedChildComponent } from './page-red-child/page-red-child.component';
import { PageRedComponent } from './page-red/page-red.component';

const routes: Routes = [
  {
    path: 'page-red',
    component: PageRedComponent,
    outlet: 'outlet-a',
    children: [
      {
        path: 'child',
        component: PageRedChildComponent,
        outlet: 'outlet-child-a',
      },
    ],
  },
  {
    path: 'page-green',
    component: PageGreenComponent,
    outlet: 'outlet-b',
  },
  {
    path: 'page-green',
    component: PageGreenComponent,
    outlet: 'outlet-c',
  },
  {
    path: 'page-blue',
    component: PageBlueComponent,
    outlet: 'outlet-b',
  },
  {
    path: 'page-blue',
    component: PageBlueComponent,
    outlet: 'outlet-c',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
