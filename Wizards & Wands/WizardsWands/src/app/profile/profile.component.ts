// src/app/components/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    standalone: true,
    imports: [FormsModule, CommonModule, NavbarComponent]
})

export class ProfileComponent implements OnInit {
  usuario: Usuario = { email: '', password: '', nombre: '' };
  message: string = '';
  userId: number | null = null;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      if (this.userId) {
        this.usuarioService.getUserById(this.userId).subscribe(
          user => this.usuario = user,
          error => this.message = 'User not found'
        );
      }
    });
  }

  update() {
    if (this.userId) {
      this.usuarioService.updateUser(this.userId, this.usuario).subscribe(
        user => this.message = 'Profile updated successfully',
        error => this.message = 'Update failed'
      );
    }
  }

  delete() {
    if (this.userId) {
      this.usuarioService.deleteUser(this.userId).subscribe(
        () => {
          this.message = 'Profile deleted successfully';
          localStorage.removeItem('userId');
          this.router.navigate(['/login']);
        },
        error => this.message = 'Deletion failed'
      );
    }
  }
}