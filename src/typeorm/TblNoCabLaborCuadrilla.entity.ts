import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLaborCuadrilla')
export class TblNoCabLaborCuadrilla {
  @Column('int', { nullable: false })
  NIdNoLabor?: number;
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
  DFxLabor?: Date;
  @Column('int', { nullable: false })
  NNuLabor?: number;
  @Column('int', { nullable: false })
  NNuCuadrilla?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoJornal?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLabor?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioAprueba?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: string;
  @Column('datetime', { nullable: false })
  DFxAprueba?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}