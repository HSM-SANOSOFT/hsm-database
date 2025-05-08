import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabCierreDistribucion')
export class TblCiCabCierreDistribucion {
  @Column('int', { nullable: false })
  NIdCiCierreDistribucion?: any;
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
  @Column('datetime', { nullable: false })
  DFxCierre?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column('int', { nullable: false })
  NNuAsiento?: any;
  @Column('int', { nullable: false })
  NNuAnioCtbl?: any;
  @Column('int', { nullable: false })
  NNuPeriodoCtbl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuComprobante?: any;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCierre?: string;
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
  @Column('int', { nullable: false })
  NIdNoLiqHaberes?: any;
}