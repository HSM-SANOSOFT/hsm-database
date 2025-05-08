import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLiquidacionVacaciones')
export class TblNoCabLiquidacionVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
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
  CSnGoce?: string;
  @Column('datetime', { nullable: false })
  DFxIniGoce?: any;
  @Column('datetime', { nullable: false })
  DFxFinGoce?: any;
  @Column('int', { nullable: false })
  NIdNoCrtlVacaciones?: any;
  @Column('int', { nullable: false })
  NIdNoNovedad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLiquidacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCalculo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPagoLiquidacion?: string;
  @Column('int', { nullable: false })
  NNuDiasTomados?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiaAdicAplicaIESS?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarVacaciones?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarIgresoEgreso?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIESSSueldo?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalcularFondoReserva?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasVacaciones?: string;
  @Column('int', { nullable: false })
  NQnDiasVacaciones?: any;
  @Column('int', { nullable: false })
  NQnDiasAdicionalLiq?: any;
  @Column('int', { nullable: false })
  NNuDiasPendientes?: any;
  @Column('int', { nullable: false })
  NNuDiasOtroMedio?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTotalLiquidacion?: string;
}