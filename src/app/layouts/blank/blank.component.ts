<<<<<<< HEAD
console.log('');import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
=======
import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
>>>>>>> 6afdd037728194054a400117cad7ba2911dc1c21

@Component({
  selector: 'app-blank',
  standalone: true,
<<<<<<< HEAD
  imports: [FooterComponent, NavbarComponent,RouterOutlet],
=======
  imports: [FooterComponent],
>>>>>>> 6afdd037728194054a400117cad7ba2911dc1c21
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
