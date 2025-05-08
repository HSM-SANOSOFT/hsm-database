import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabFalta')
export class TblNoCabFalta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoFalta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('datetime', { nullable: false })
  DFxFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NIdNoNovedad?: any;
  @Column('int', { nullable: false })
  NIdCAMovimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeFalta?: any;
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
  CCiArea?: any;
}