import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabCierreDistribucion')
export class TblCiCabCierreDistribucion {
  @Column('int', { nullable: false })
  NIdCiCierreDistribucion?: number;
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
  @Column('datetime', { nullable: false })
  DFxCierre?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column('int', { nullable: false })
  NNuAsiento?: number;
  @Column('int', { nullable: false })
  NNuAnioCtbl?: number;
  @Column('int', { nullable: false })
  NNuPeriodoCtbl?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuComprobante?: number;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCierre?: string;
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
  @Column('int', { nullable: false })
  NIdNoLiqHaberes?: number;
}