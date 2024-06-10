// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]

})
export class LoginComponent {
  usuario: Usuario = { email: '', password: '', nombre: '' };
  message: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  login() {
    this.usuarioService.login(this.usuario).subscribe(
      response => {
        this.message = response.message;
        localStorage.setItem('userId', response.id);
        this.router.navigate([`/profile/${response.id}`]);
      },
      error => this.message = error.error.message
    );
  }
}