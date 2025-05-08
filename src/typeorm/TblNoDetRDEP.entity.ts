import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEP')
export class TblNoDetRDEP {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumVivienda?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMeses?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMesesSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidadesSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngrOtroEmpleador?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngrOtroEmpleadorSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuartoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCancelado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaCanceladoSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDignoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravable?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosNoGravableSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSOtroEmplSistema?: any;
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
  NVtDesahucioSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDespidoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleador?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaEmpleadorSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDeduOtroEmpleador?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajasOtroEmpleador?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleAnual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleAnualSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaCausado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaCausadoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpRtaRetenOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaAsumidoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImpuestoRtaRetenidoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetenciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuRetencionesSistema?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluirEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEstablecimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxResidenciaTrab?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxPaisResidencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxAplicaConvenio?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTipoTrabDiscap?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnpPorcentajeDiscap?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDiscapacidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NidNoDiscapacidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacaciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESSVacacionesSistema?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacionSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporte?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTransporteSistema?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGalapagos?: any;

}