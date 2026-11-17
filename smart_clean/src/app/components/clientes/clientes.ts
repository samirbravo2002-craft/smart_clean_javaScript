import { Component } from '@angular/core';
import { Cliente, ClienteAgregar, CLIENTES } from '../../shared/shared-data';

declare var bootstrap: any;

@Component({
selector: 'app-clientes',
standalone: false,
templateUrl: './clientes.html',
styleUrl: './clientes.css',
})
export class Clientes {
modoEdicion: any;

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

clientes: Cliente[] = CLIENTES;

// Objeto enlazado al formulario

nuevoCliente: ClienteAgregar = {
idCliente: 0,
nombreCliente: '',
apellidoCliente: '',
tipoDocumentoCliente: '',
numeroDocumentoCliente: '',
telefonoCliente: '',
correoCliente: '',
vehiculos: []
};

guardarCliente() {


if (
  !this.nuevoCliente.nombreCliente ||
  !this.nuevoCliente.apellidoCliente ||
  !this.nuevoCliente.tipoDocumentoCliente ||
  !this.nuevoCliente.numeroDocumentoCliente ||
  !this.nuevoCliente.telefonoCliente ||
  !this.nuevoCliente.correoCliente
) {
  alert('Por favor complete todos los campos');
  return;
}

const correoValido =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/.test(
    this.nuevoCliente.correoCliente
  );

if (!correoValido) {
  alert('Ingrese un correo válido.');
  return;
}

this.clientes.push({
  idCliente: this.clientes.length + 1,
  nombreCliente: this.nuevoCliente.nombreCliente,
  apellidoCliente: this.nuevoCliente.apellidoCliente,
  tipoDocumentoCliente: this.nuevoCliente.tipoDocumentoCliente,
  numeroDocumentoCliente: this.nuevoCliente.numeroDocumentoCliente,
  telefonoCliente: this.nuevoCliente.telefonoCliente,
  correoCliente: this.nuevoCliente.correoCliente,
  vehiculos: []
});

this.nuevoCliente = {
  idCliente: 0,
  nombreCliente: '',
  apellidoCliente: '',
  tipoDocumentoCliente: '',
  numeroDocumentoCliente: '',
  telefonoCliente: '',
  correoCliente: '',
  vehiculos: []
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

eliminarCliente(id: number) {

  const confirmar = confirm(
    '¿Está seguro de eliminar este cliente?'
  );

  if (!confirmar) {
    return;
  }

  this.clientes = this.clientes.filter(
    cliente => cliente.idCliente !== id
  );

}


editarCliente(cliente: Cliente): void {
  this.nuevoCliente = { ...cliente };
}


}
