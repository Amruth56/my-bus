import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';


@Component({
  selector: 'app-searchbar',
  imports: [FormsModule,AutoCompleteModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  items: any[] =[];
  query: string ='';
  value: any;

  search(event: AutoCompleteCompleteEvent) {
  let _items = [...Array(10).keys()];

  this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
  }
}
