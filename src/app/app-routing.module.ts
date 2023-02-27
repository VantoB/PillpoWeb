import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedVideosComponent } from './components/accepted-videos/accepted-videos.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminsDataComponent } from './components/admins-data/admins-data.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ContentCreatorComponent } from './components/content-creator/content-creator.component';
import { DeclinedVideosComponent } from './components/declined-videos/declined-videos.component';
import { LoginComponent } from './components/login/login.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NewVideosComponent } from './components/new-videos/new-videos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OffersComponent } from './components/offers/offers.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { TotalVideosComponent } from './components/total-videos/total-videos.component';
import { VideoReviewComponent } from './components/video-review/video-review.component';
import { AdminIsLoginGuard } from './guards/admin-is-login.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'Home',
    component: MainlayoutComponent,
    canActivate : [AdminIsLoginGuard] ,
    children: [
      { path: '', redirectTo: '/Home/VideoReview/NewVideos', pathMatch: 'full' },
      { path: 'VideoReview', 
      component: VideoReviewComponent ,
      children:[
        { path: 'AcceptedVideos' , component: AcceptedVideosComponent},
        { path: 'NewVideos' , component: NewVideosComponent},
        { path: 'DeclinedVideos' , component: DeclinedVideosComponent},
        { path: 'TotalVideos' , component: TotalVideosComponent}
      ]},
      { path: 'ContentCreators', component: ContentCreatorComponent },
      { path: 'AdminsData' , component: AdminsDataComponent} ,
      { path: 'AddAdmin' , component: AddAdminComponent},
      { path: 'Analytics' , component: AnalyticsComponent},
      { path: 'Payments' , component: PaymentsComponent},
      { path: 'Offers' , component: OffersComponent},
      { path: 'Sellers' , component: SellersComponent}
    ]
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
