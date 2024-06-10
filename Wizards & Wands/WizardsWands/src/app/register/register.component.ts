// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  usuario: Usuario = { email: '', password: '', nombre: '' };
  message: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  register() {
    this.usuarioService.register(this.usuario).subscribe(
      response => {
        this.message = response.message;
        this.router.navigate(['/login']);
      },
      error => this.message = error.error.message
    );
  }
}
