import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import {  ValidationService } from '../app/services/validation.service';
import { AuthService } from '../app/services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBillBoardComponent } from './components/add-bill-board/add-bill-board.component';
import { AuthGuard } from './guards/auth.guard';
import {NbThemeModule,NbCardModule, NbMenuModule, NbAccordionComponent, NbListModule, NbAccordionModule, NbStepperModule, NbButtonModule} from '@nebular/theme';
import {NbContextMenuModule, NbTabsetModule, NbInputModule ,NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { MyBillboardComponent } from './components/my-billboard/my-billboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateBillBoardComponent } from './components/update-bill-board/update-bill-board.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { AllBillboardsComponent } from './components/all-billboards/all-billboards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PricingTableComponent } from './components/pricing-table/pricing-table.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { RequestComponent } from './components/request/request.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { FileSelectDirective } from 'ng2-file-upload';



@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    AddBillBoardComponent,
    MyBillboardComponent,
    DashboardComponent,
    UpdateBillBoardComponent,
    AddUserComponent,
    UserComponent,
    AllBillboardsComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    PricingTableComponent,
    EditUserComponent,
    OrderNowComponent,
    MyOrdersComponent,
    RequestComponent,
    MainDashboardComponent
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    NbContextMenuModule,
    NbTabsetModule,
    NbButtonModule,
    NbMenuModule,
    NbInputModule,
    NbLayoutModule,
    NbSidebarModule,
    NbListModule,
    NbStepperModule,
    NbAccordionModule,
    NbCardModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidationService,AuthService,AuthGuard,NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
