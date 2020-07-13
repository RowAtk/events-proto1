import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'allevents',
    loadChildren: () => import('./allevents/allevents.module').then( m => m.AlleventsPageModule)
  },
  {
    path: 'new-events',
    loadChildren: () => import('./new-events/new-events.module').then( m => m.NewEventsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'events-status',
    loadChildren: () => import('./events-status/events-status.module').then( m => m.EventsStatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
