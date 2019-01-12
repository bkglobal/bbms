import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBillBoardComponent } from './components/add-bill-board/add-bill-board.component';
import { AuthGuard } from './guards/auth.guard';
import { MyBillboardComponent } from './components/my-billboard/my-billboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {  UpdateBillBoardComponent} from './components/update-bill-board/update-bill-board.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllBillboardsComponent } from './components/all-billboards/all-billboards.component';
import { UserComponent } from './components/user/user.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent } from './components/contact/contact.component';
import { PricingTableComponent } from './components/pricing-table/pricing-table.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { RequestComponent } from './components/request/request.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'home',component:HomeComponent},
  {path: 'request', component:RequestComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'about', component:AboutComponent},
  {path: 'detail/:id', component:DetailComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'pricing', component:PricingTableComponent},
  {path: 'editUser', component:EditUserComponent},
  {path: 'my-orders', component:MyOrdersComponent},
  {path:'dashboard',component:DashboardComponent , children:[
    {
      path:'',
      component:MainDashboardComponent
    },
    {
      path:'addUser', component:AddUserComponent
    },
    {
      path: 'billBoard', component:AllBillboardsComponent,
      children : [
        {
          path: 'addBillBoard', component: AddBillBoardComponent
        }    
      ]
    },
    {
      path: 'users', component:UserComponent
    },
    {
      path: 'updateBillBoard', component: UpdateBillBoardComponent
    },
    { 
      path: 'addBillBoard', component: AddBillBoardComponent
    }
  ]},
  {path:'addBillBoard',component: AddBillBoardComponent, canActivate: [AuthGuard]},
  {path:'updateBillBoard',component: UpdateBillBoardComponent, canActivate: [AuthGuard]},
  {path: 'my-bill-board', component:MyBillboardComponent, canActivate: [AuthGuard]},
  {path:'',component:HomeComponent},
  {path: '**' ,component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
