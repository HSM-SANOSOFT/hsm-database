import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEP')
export class TblNoDetRDEP {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumVivienda?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMeses?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMesesSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidadesSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngrOtroEmpleador?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngrOtroEmpleadorSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuartoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCancelado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCanceladoSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDignoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravable?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravableSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSOtroEmplSistema?: number;
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
  NVtDesahucioSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespidoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleador?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleadorSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDeduOtroEmpleador?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajasOtroEmpleador?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleAnual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleAnualSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaCausado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaCausadoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpRtaRetenOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumidoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenidoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetenciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetencionesSistema?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluirEmpleado?: string;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacaciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacacionesSistema?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacionSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporte?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporteSistema?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGalapagos?: string;

}