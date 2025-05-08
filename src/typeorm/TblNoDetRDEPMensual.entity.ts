import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEPMensual')
export class TblNoDetRDEPMensual {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimocuarto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCancelado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravable?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPEducacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPSalud?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPVestimenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPVivienda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaDiscapacidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaTerceraEdad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDesahucio?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetenciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponible?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleador?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacion?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEstablecimiento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxResidenciaTrab?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxPaisResidencia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxAplicaConvenio?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTipoTrabDiscap?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnpPorcentajeDiscap?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDiscapacidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NidNoDiscapacidad?: string;
  @Column('int', { nullable: false })
  NNuDiasVacaciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacaciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroProv?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimocuartoProv?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporte?: number;

}