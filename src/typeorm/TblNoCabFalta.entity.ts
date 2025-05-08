import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabFalta')
export class TblNoCabFalta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoFalta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('datetime', { nullable: false })
  DFxFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoNovedad?: any;
  @Column('int', { nullable: false })
  NIdCAMovimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeFalta?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}