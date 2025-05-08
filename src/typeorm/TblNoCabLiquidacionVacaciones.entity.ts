import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLiquidacionVacaciones')
export class TblNoCabLiquidacionVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NNuLiquidacion?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxLiquidacion?: any;
  @Column('int', { nullable: false })
  NNuAnioLiquidacion?: any;
  @Column('int', { nullable: false })
  NNuDiasLiquidacion?: any;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnGoce?: any;
  @Column('datetime', { nullable: false })
  DFxIniGoce?: any;
  @Column('datetime', { nullable: false })
  DFxFinGoce?: any;
  @Column('int', { nullable: false })
  NIdNoCrtlVacaciones?: any;
  @Column('int', { nullable: false })
  NIdNoNovedad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLiquidacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCalculo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPagoLiquidacion?: any;
  @Column('int', { nullable: false })
  NNuDiasTomados?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiaAdicAplicaIESS?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarVacaciones?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarIgresoEgreso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIESSSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalcularFondoReserva?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasVacaciones?: any;
  @Column('int', { nullable: false })
  NQnDiasVacaciones?: any;
  @Column('int', { nullable: false })
  NQnDiasAdicionalLiq?: any;
  @Column('int', { nullable: false })
  NNuDiasPendientes?: any;
  @Column('int', { nullable: false })
  NNuDiasOtroMedio?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTotalLiquidacion?: any;
}