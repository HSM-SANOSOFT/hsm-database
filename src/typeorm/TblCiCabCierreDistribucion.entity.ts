import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabCierreDistribucion')
export class TblCiCabCierreDistribucion {
  @Column('int', { nullable: false })
  NIdCiCierreDistribucion?: any;
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
  @Column('datetime', { nullable: false })
  DFxCierre?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column('int', { nullable: false })
  NNuAsiento?: any;
  @Column('int', { nullable: false })
  NNuAnioCtbl?: any;
  @Column('int', { nullable: false })
  NNuPeriodoCtbl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: any;
  @Column('int', { nullable: false })
  NNuComprobante?: any;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCierre?: any;
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
  @Column('int', { nullable: false })
  NIdNoLiqHaberes?: any;
}