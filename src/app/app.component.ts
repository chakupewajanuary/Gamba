import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to 'styleUrls'
})
export class AppComponent {
  title = 'Gamba';
  
  // Defining the Student object within the class
  Student = {
    name: '',
    email:'',
    phone:''
  };
}
