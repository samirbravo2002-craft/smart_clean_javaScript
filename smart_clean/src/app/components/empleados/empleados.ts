import { Component } from '@angular/core';
import { Colaborador, ColaboradorAgregar, COLABORADORES } from '../../shared/shared-data';

declare var bootstrap: any;

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {

soloLetras(event: KeyboardEvent): void {
  const charCode = event.key;

  if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ ]$/.test(charCode)) {
    event.preventDefault();
  }
}

soloNumeros(event: KeyboardEvent): void {
  const tecla = event.key;

  if (!/^[0-9]$/.test(tecla)) {
    event.preventDefault();
  }
}

  mensajeExito = false;

  empleados: Colaborador[] = COLABORADORES;

  // Objeto enlazado al formulario

  nuevoEmpleado: ColaboradorAgregar = {
    idColaborador: 0,
    nombreColaborador: '',
    apellidoColaborador: '',
    tipoDocumentoColaborador: '',
    numeroDocumentoColaborador: '',
    telefonoColaborador: '',
    correoColaborador: ''
  };

  guardarEmpleado() {

    if (
      !this.nuevoEmpleado.nombreColaborador ||
      !this.nuevoEmpleado.apellidoColaborador ||
      !this.nuevoEmpleado.tipoDocumentoColaborador ||
      !this.nuevoEmpleado.numeroDocumentoColaborador ||
      !this.nuevoEmpleado.telefonoColaborador ||
      !this.nuevoEmpleado.correoColaborador
    ) {
      alert('Por favor complete todos los campos');
      return;
    }

    const correoValido =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/.test(
        this.nuevoEmpleado.correoColaborador
      );

    if (!correoValido) {
      alert('Ingrese un correo válido.');
      return;
    }



    
    this.empleados.push({
      idColaborador: this.empleados.length + 1,
      nombreColaborador: this.nuevoEmpleado.nombreColaborador,
      apellidoColaborador: this.nuevoEmpleado.apellidoColaborador,
      tipoDocumentoColaborador: this.nuevoEmpleado.tipoDocumentoColaborador,
      numeroDocumentoColaborador: this.nuevoEmpleado.numeroDocumentoColaborador,
      telefonoColaborador: this.nuevoEmpleado.telefonoColaborador,
      correoColaborador: this.nuevoEmpleado.correoColaborador
    });

    this.nuevoEmpleado = {
      idColaborador: 0,
      nombreColaborador: '',
      apellidoColaborador: '',
      tipoDocumentoColaborador: '',
      numeroDocumentoColaborador: '',
      telefonoColaborador: '',
      correoColaborador: ''
    };


    this.mensajeExito = true;

    const modalElement = document.getElementById('staticBackdrop');

    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }

    setTimeout(() => {
      this.mensajeExito = false;
    }, 3000);
  }



  eliminarEmpleado(id: number) {

    const confirmar = confirm(
      '¿Está seguro de eliminar este empleado?'
    );

    if (!confirmar) {
      return;
    }

    this.empleados = this.empleados.filter(
      empleado => empleado.idColaborador !== id
    );
  }

  editarEmpleado(empleado: Colaborador): void {
    this.nuevoEmpleado = { ...empleado };
  }
  



}
