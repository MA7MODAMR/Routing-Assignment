import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: '', component: HomeComponent, title: 'Home' }
];
