import { Component, OnInit } from '@angular/core';
import { KsrtcComponent } from '../ksrtc/ksrtc.component';
import { BmtcComponent } from '../bmtc/bmtc.component';
import { MetroComponent } from '../metro/metro.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [KsrtcComponent, BmtcComponent, MetroComponent, SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  selectedTab: string = 'ksrtc';

  changeTab(name:string){
    this.selectedTab = name
    console.log(this.selectedTab)
  }


  ngOnInit(): void {
  }

}
