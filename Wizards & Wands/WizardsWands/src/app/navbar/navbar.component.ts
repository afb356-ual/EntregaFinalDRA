import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule] 
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    // Cualquier inicialización necesaria
  }

  userId: string | null = localStorage.getItem('userId');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
