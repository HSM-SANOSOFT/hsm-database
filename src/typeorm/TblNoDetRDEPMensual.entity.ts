import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEPMensual')
export class TblNoDetRDEPMensual {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimocuarto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCancelado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravable?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPEducacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPSalud?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPVestimenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtGPVivienda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaDiscapacidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaTerceraEdad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDesahucio?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetenciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponible?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleador?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacion?: any;
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
  NQnpPorcentajeDiscap?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDiscapacidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NidNoDiscapacidad?: string;
  @Column('int', { nullable: false })
  NNuDiasVacaciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacaciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroProv?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimocuartoProv?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporte?: any;

}