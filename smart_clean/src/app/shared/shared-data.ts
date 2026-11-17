

export interface Cliente {
  idCliente: number;
  nombreCliente: string;
  apellidoCliente: string;
  tipoDocumentoCliente: string;
  numeroDocumentoCliente: string;
  telefonoCliente: string;
  correoCliente: string;
  vehiculos: string[];
}

export interface ClienteAgregar {
  idCliente: number;
  nombreCliente: string;
  apellidoCliente: string;
  tipoDocumentoCliente: string;
  numeroDocumentoCliente: string;
  telefonoCliente: string;
  correoCliente: string;
  vehiculos: string[];
}

export interface Colaborador {
  idColaborador: number;
  nombreColaborador: string;
  apellidoColaborador: string;
  tipoDocumentoColaborador: string;
  numeroDocumentoColaborador: string;
  telefonoColaborador: string;
  correoColaborador: string;
}

export interface ColaboradorAgregar {
  idColaborador: number;
  nombreColaborador: string;
  apellidoColaborador: string;
  tipoDocumentoColaborador: string;
  numeroDocumentoColaborador: string;
  telefonoColaborador: string;
  correoColaborador: string;
}

export interface Reserva {
  id: number;
  colaboradorId: number;
  nombreCliente: string;
  nombreColaborador: string;
  tipoVehiculo: string;
  servicio: string;
  valor: string;
  estado: string;
}

export interface TipoVehiculo {
  id: number;
  nombreTipoVehiculo: string;
}

export interface Servicio {
  id: number;
  nombreServicio: string;
  descripcion: string;
  precio: string;
}


export interface ReservaSeleccionada {
  id: number;
  colaboradorId: string;
  clienteId: string;
  tipoVehiculoId: string;
  fecha: string;
  servicioId: string;
  hora: string;
  precio: number;
}

export const CLIENTES: Cliente[] = [
  {
    idCliente: 1,
    nombreCliente: 'Carlos',
    apellidoCliente: 'Pérez',
    tipoDocumentoCliente: 'C.C.',
    numeroDocumentoCliente: '1234567890',
    telefonoCliente: '3216459870',
    correoCliente: 'carlos@gmail.com',
    vehiculos: ['ABC123', 'XYZ789'],
  },
  {
    idCliente: 2,
    nombreCliente: 'Laura',
    apellidoCliente: 'Gómez',
    tipoDocumentoCliente: 'C.C.',
    numeroDocumentoCliente: '9876543210',
    telefonoCliente: '3001234567',
    correoCliente: 'laura@hotmail.com',
    vehiculos: ['CBC123', 'XYZ799'],
  },
];

export const COLABORADORES: Colaborador[] = [
  {
    idColaborador: 1,
    nombreColaborador: 'Juan',
    apellidoColaborador: 'Hernandez',
    tipoDocumentoColaborador: 'C.C.',
    numeroDocumentoColaborador: '1006756243',
    telefonoColaborador: '3241234237',
    correoColaborador: 'Juan2583@gmail.com',
  },
  {
    idColaborador: 2,
    nombreColaborador: 'Laura',
    apellidoColaborador: 'Flores',
    tipoDocumentoColaborador: 'C.C.',
    numeroDocumentoColaborador: '1245876951',
    telefonoColaborador: '3224978525',
    correoColaborador: 'Lauflor23@gmail.com',
  },
  
];

export const ESTADOS_RESERVA = ['Pendiente', 'En proceso', 'Completada', 'Cancelada'];

export const RESERVAS: Reserva[] = [];

export const RESERVAS_COMPLETADAS: Reserva[] = [];

export const TIPOS_VEHICULO: TipoVehiculo[] = [
  {
    id: 1,
    nombreTipoVehiculo: 'Carro',
  },
  {
    id: 2,
    nombreTipoVehiculo: 'Moto',
  },
];

export const SERVICIOS: Servicio[] = [
  {
    id: 1,
    nombreServicio: 'Regular',
    descripcion: 'Lavado exterior y limpieza rápida.',
    precio: '15000'
  },
  {
    id: 2,
    nombreServicio: 'General',
    descripcion: 'Lavado profundo interior y exterior.',
    precio: '25000'
  },
  {
    id: 3,
    nombreServicio: 'Lavado sencillo',
    descripcion: 'Lavado sencillo',
    precio: '20000',
  },
  {
    id: 4,
    nombreServicio: 'Lavado premium',
    descripcion: 'Lavado premium',
    precio: '30000',
  },
];

export const DISPONIBILIDADES = [
  '8:00 a.m.',
  '8:30 a.m.',
  '9:00 a.m.',
  '10:00 a.m.',
  '11:00 a.m.',
  '12:00 p.m.',
  '1:00 p.m.',
  '2:00 p.m.',
  '3:00 p.m.',
  '4:00 p.m.',
  '5:00 p.m.',
];




