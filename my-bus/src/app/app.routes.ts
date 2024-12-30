import { Routes } from '@angular/router';
import { KsrtcComponent } from './ksrtc/ksrtc.component';
import { BmtcComponent } from './bmtc/bmtc.component';
import { MetroComponent } from './metro/metro.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HeaderComponent
    },{
        path:'ksrtc',
        component:KsrtcComponent
    }
    ,{
        path:'bmtc',
        component:BmtcComponent
    }
    ,{
        path:'metro',
        component:MetroComponent
    }
];
