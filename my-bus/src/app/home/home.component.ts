import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [HeaderComponent, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
