import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./Components/Home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'SDA',
        pathMatch: 'full',
        loadComponent: () => import('./Components/SeventhdayAhmedabad/seventhday-ahmedabad.component').then(mod => mod.SeventhdayAhmedabadComponent)
    },
    {
        path: 'ImageGallery',
        pathMatch: 'full',
        loadComponent: () => import('./Components/ImageGallery/image-gallery.component').then(mod => mod.ImageGalleryComponent)
    },
];
