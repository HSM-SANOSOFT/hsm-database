import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabBatchIESS')
export class TblNoCabBatchIESS {
  @PrimaryColumn('int', { nullable: false })
  NidNoBatchIESS?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuMes?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnSoloHorasExtra?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnIngresosAportables?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeBatchIEES?: string;
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
}