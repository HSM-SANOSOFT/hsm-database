import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLiquidacionVacaciones')
export class TblNoCabLiquidacionVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('int', { nullable: false })
  NNuLiquidacion?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxLiquidacion?: Date;
  @Column('int', { nullable: false })
  NNuAnioLiquidacion?: number;
  @Column('int', { nullable: false })
  NNuDiasLiquidacion?: number;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: Date;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnGoce?: string;
  @Column('datetime', { nullable: false })
  DFxIniGoce?: Date;
  @Column('datetime', { nullable: false })
  DFxFinGoce?: Date;
  @Column('int', { nullable: false })
  NIdNoCrtlVacaciones?: number;
  @Column('int', { nullable: false })
  NIdNoNovedad?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLiquidacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCalculo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPagoLiquidacion?: string;
  @Column('int', { nullable: false })
  NNuDiasTomados?: number;
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
  NVtSueldo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalcularFondoReserva?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasVacaciones?: string;
  @Column('int', { nullable: false })
  NQnDiasVacaciones?: number;
  @Column('int', { nullable: false })
  NQnDiasAdicionalLiq?: number;
  @Column('int', { nullable: false })
  NNuDiasPendientes?: number;
  @Column('int', { nullable: false })
  NNuDiasOtroMedio?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTotalLiquidacion?: string;
}