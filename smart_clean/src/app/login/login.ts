import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, CLIENTES, Colaborador, COLABORADORES } from '../shared/shared-data';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  // Importar datos del shared
  clientes: Cliente[] = CLIENTES;
  colaboradores: Colaborador[] = COLABORADORES;

  // Usuarios para autenticación
  private usuariosAuth = [
    {
      email: 'admin@smartclean.com',
      password: 'admin123',
      nombre: 'Administrador',
      tipo: 'admin'
    },
    {
      email: 'coordinador@smartclean.com',
      password: 'coord123',
      nombre: 'Coordinador',
      tipo: 'coordinador'
    },
    ...this.colaboradores.map(col => ({
      email: `colaborador${col.idColaborador}@smartclean.com`,
      password: `colab${col.idColaborador}123`,
      nombre: col.nombreColaborador,
      tipo: 'colaborador'
    })),
    ...this.clientes.map(cli => ({
      email: `cliente${cli.idCliente}@smartclean.com`,
      password: `cliente${cli.idCliente}123`,
      nombre: cli.nombreCliente,
      tipo: 'cliente'
    }))
  ];

  constructor(private router: Router) {}

  onLogin() {
    // Limpiar mensajes previos
    this.errorMessage = '';
    
    // Validación: campos obligatorios
    if (!this.email || !this.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    // Validación: formato de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Ingresa un correo electrónico válido';
      return;
    }

    // Validación: longitud mínima de contraseña
    if (this.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    // Activar loading
    this.isLoading = true;

    // Simular petición al servidor
    setTimeout(() => {
      const usuario = this.usuariosAuth.find(
        u => u.email === this.email && u.password === this.password
      );

      if (usuario) {
        // Login exitoso
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['/reservas']);
      } else {
        // Login fallido
        this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.';
      }
      
      this.isLoading = false;
    }, 1500);
  }
}

