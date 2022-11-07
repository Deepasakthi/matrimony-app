import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSwipeComponent } from './search-swipe/search-swipe.component';
import { SwipeScreenComponent } from './swipe-screen/swipe-screen.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:"view-profile/:id", component: ViewProfileComponent},
  {path:"search-swipe", component: SearchSwipeComponent},
  {path:'', redirectTo: '/search-swipe', pathMatch:'full'},
  {path:'swipe-screen', component: SwipeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
