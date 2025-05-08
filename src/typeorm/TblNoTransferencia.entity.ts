import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTransferencia')
export class TblNoTransferencia {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column('datetime', { nullable: false })
  DFxTransferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxGlosa?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRefeMvtoBco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTransferencia?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnTransIndividual?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NNuDocBanco?: any;
}