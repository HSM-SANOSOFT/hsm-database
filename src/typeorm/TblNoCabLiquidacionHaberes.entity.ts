import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLiquidacionHaberes')
export class TblNoCabLiquidacionHaberes {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivoVistoBueno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDespido?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDesahucio?: string;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUltimaRemuneracion?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NNuCodMRL?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasVacaciones?: string;
  @Column('int', { nullable: false })
  NQnDiasVacaciones?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDetalleVacaciones?: string;
}