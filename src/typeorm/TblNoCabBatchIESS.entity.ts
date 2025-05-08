import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabBatchIESS')
export class TblNoCabBatchIESS {
  @PrimaryColumn('int', { nullable: false })
  NidNoBatchIESS?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuMes?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnSoloHorasExtra?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnIngresosAportables?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeBatchIEES?: any;
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
}