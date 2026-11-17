import { Component } from '@angular/core';
import {
  Cliente,
  Colaborador,
  Reserva,
  ReservaSeleccionada,
  Servicio,
  TipoVehiculo,
  CLIENTES,
  COLABORADORES,
  DISPONIBILIDADES,
  RESERVAS,
  RESERVAS_COMPLETADAS,
  SERVICIOS,
  TIPOS_VEHICULO,
  ESTADOS_RESERVA,
} from '../../shared/shared-data';

@Component({
  selector: 'app-reservas',
  standalone: false,
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas {
  tipoDocumento: string = 'C.C.';
  numeroDocumentoCliente: string = '';
  clienteEncontrado: Cliente | null = null;

  clientes: Cliente[] = CLIENTES;
  colaboradores: Colaborador[] = COLABORADORES;
  estadosReserva: string[] = ESTADOS_RESERVA;
  reservas: Reserva[] = RESERVAS;
  reservasCompletadas: Reserva[] = RESERVAS_COMPLETADAS;
  tiposVehiculo: TipoVehiculo[] = TIPOS_VEHICULO;
  servicios: Servicio[] = SERVICIOS;
  disponibilidades: string[] = DISPONIBILIDADES;

  reservaSeleccionada: ReservaSeleccionada = {
    id: 0,
    colaboradorId: '',
    clienteId: '',
    tipoVehiculoId: '',
    fecha: '',
    servicioId: '',
    hora: '',
    precio: 0,
  };

  buscarCliente(): void {
    const documento = this.numeroDocumentoCliente.trim();

    if (!documento) {
      alert('Por favor ingrese un número de documento');
      return;
    }

    const cliente = this.clientes.find((c) => c.numeroDocumentoCliente === documento); //cambie "numeroDocumentoCliente" por "numeroDocumentoCliente"


    if (cliente) {
      this.clienteEncontrado = cliente;
    } else {
      this.clienteEncontrado = null;
      alert('Cliente no encontrado');
    }
  }

  limpiarCliente(): void {
    this.clienteEncontrado = null;
    this.numeroDocumentoCliente = '';
    this.reservaSeleccionada.clienteId = '';
  }

  crearReserva(): void {
    if (
      !this.reservaSeleccionada.colaboradorId ||
      !this.reservaSeleccionada.tipoVehiculoId ||
      !this.clienteEncontrado ||
      !this.reservaSeleccionada.fecha ||
      !this.reservaSeleccionada.servicioId ||
      !this.reservaSeleccionada.hora
    ) {
      alert('Por favor complete todos los campos para crear la reserva');
      return;
    }

    const colaborador = this.colaboradores.find(
      (c) => c.idColaborador.toString() === this.reservaSeleccionada.colaboradorId,
    );

    const tipoVehiculo = this.tiposVehiculo.find(
      (t) => t.id.toString() === this.reservaSeleccionada.tipoVehiculoId,
    );

    const servicio = this.servicios.find(
      (s) => s.id.toString() === this.reservaSeleccionada.servicioId,
    );

    this.reservas.push({
      id: this.reservas.length + 1,
      colaboradorId: Number(this.reservaSeleccionada.colaboradorId),
      nombreCliente: this.clienteEncontrado.nombreCliente,
      nombreColaborador: colaborador?.nombreColaborador || '',
      tipoVehiculo: tipoVehiculo?.nombreTipoVehiculo || '',
      servicio: servicio?.nombreServicio || '',
      valor: servicio?.precio || '0',
      estado: this.estadosReserva[0],
    });
  }

  iniciarReserva(id: number): void {
    const reservaIndex = this.reservas.findIndex((r) => r.id === id);

    if (reservaIndex === -1) {
      return;
    }

    const reserva = this.reservas[reservaIndex];

    if (reserva.estado === this.estadosReserva[0]) {
      this.reservas[reservaIndex] = {
        ...reserva,
        estado: this.estadosReserva[1],
      };
      return;
    }
  }

  finalizarReserva(id: number): void {
    const reservaIndex = this.reservas.findIndex((r) => r.id === id);

    if (reservaIndex === -1) {
      return;
    }

    const reserva = this.reservas[reservaIndex];

    if (reserva.estado === this.estadosReserva[1]) {
      const reservaFinalizada = {
        ...reserva,
        estado: this.estadosReserva[3],
      };

      this.reservas = this.reservas.filter((r) => r.id !== id);
      this.reservasCompletadas = [...this.reservasCompletadas, reservaFinalizada];
    }
  }

  cancelarReserva(id: number): void {
    this.reservas = this.reservas.filter((r) => r.id !== id);
  }
}
