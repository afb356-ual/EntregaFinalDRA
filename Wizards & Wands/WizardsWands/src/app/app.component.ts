import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, HomeComponent, RouterModule, NavbarComponent, CommonModule]
})
export class AppComponent {
  title = 'hogwarts-app';
  excludedRoutes: string[] = ['/home', '/login', '/register'];

  constructor(private router: Router) {}

  isExcludedRoute(): boolean {
    return this.excludedRoutes.includes(this.router.url);
  }


  userId: string | null = localStorage.getItem('userId');


  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
