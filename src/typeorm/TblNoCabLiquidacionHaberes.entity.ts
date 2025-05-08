import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLiquidacionHaberes')
export class TblNoCabLiquidacionHaberes {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivoVistoBueno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDespido?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDesahucio?: any;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUltimaRemuneracion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NNuCodMRL?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasVacaciones?: any;
  @Column('int', { nullable: false })
  NQnDiasVacaciones?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDetalleVacaciones?: any;
}