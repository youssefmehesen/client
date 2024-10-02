import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { LandingComponent } from './components/landing/landing.component';
import { ItemsComponent } from './components/items/items.component';
import { ServicesProviderComponent } from './components/services-provider/services-provider.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CommunityComponent } from './components/community/community.component';
import { Farme2Component } from './components/farme2/farme2.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DashboardLayoutComponent } from './layouts/dashboardLayout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'items', component: ItemsComponent, title: 'Items' },
      { path: 'add-item', component: AddItemComponent, title: 'Add New Item' },
      {
        path: 'posts',
        component: CommunityComponent,
        title: 'Discover others needs',
      },
      { path: 'frame', component: Farme2Component },
    //   { path: 'dashboard', component: DashBoardComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signup', component: SignUpComponent, title: 'sign up' },
      { path: 'login', component: LoginComponent, title: 'login' },
    ],
  },
  // {
  //     path: "items", component: ItemsComponent, children: [
  //         { path: "main", component: ItemsComponent, title: "Items" },
  //     ]
  // }
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [{ path: 'dashboard', component: DashBoardComponent }],
  },

  { path: 'services', component: ServicesProviderComponent, title: 'services' },
=======

export const routes: Routes = [
    {path: "", component:BlankComponent},
    {path: "", component:AuthComponent, children: [
       {path: "signup", component:SignUpComponent,title:"sign up"},
       {path: "login", component:LoginComponent, title: "login"}
    ]}
>>>>>>> 6afdd037728194054a400117cad7ba2911dc1c21
];
