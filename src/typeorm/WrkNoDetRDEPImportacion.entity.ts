import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetRDEPImportacion')
export class WrkNoDetRDEPImportacion {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtSueldo?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtSobreSueldo?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtBonificacion?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtUtilidades?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtIngrOtroEmpleador?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtDecimoTercero?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtDecimocuarto?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtFondoReserva?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtFondoReservaCancelado?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtSalarioDigno?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtIngresosNoGravable?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtAporteIESSVacaciones?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtAporteIESS?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtAporteIESSOtroEmpl?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtDesahucio?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtDespido?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtImpuestoRtaEmpleador?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NNuRetenciones?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NNuMeses?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtImpuestoRtaCausado?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtImpuestoRtaRetenido?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtImpuestoRtaAsumido?: number;

  @Column({ type: 'varchar', length: 3 })
  CCiError!: string;

  @Column({ type: 'varchar', length: 8000 })
  CDsError!: string;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtVacaciones?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtAlimentacion?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtTransporte?: number;
}
