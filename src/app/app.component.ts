import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angualr 17 Spring Boot CRUD Full stack APP';
  today = new Date().getFullYear()
}
