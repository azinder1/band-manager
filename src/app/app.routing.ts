import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { HomePageComponent } from './home-page/home-page.component'
import { AboutComponent } from './about/about.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditMemberComponent } from './edit-member/edit-member.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'members/:id',
    component:MemberDetailComponent
  },
  {
    path:'add-new',
    component: AddNewComponent
  },
  {
    path: "members/:id/edit",
    component: EditMemberComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
