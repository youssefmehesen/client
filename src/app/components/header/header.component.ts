import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from "../../shared/search/search.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated: boolean = false;

}
