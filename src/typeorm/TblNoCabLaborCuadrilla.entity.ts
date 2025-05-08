import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLaborCuadrilla')
export class TblNoCabLaborCuadrilla {
  @Column('int', { nullable: false })
  NIdNoLabor?: any;
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
  DFxLabor?: any;
  @Column('int', { nullable: false })
  NNuLabor?: any;
  @Column('int', { nullable: false })
  NNuCuadrilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoJornal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLabor?: string;
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
  CCiUsuarioAprueba?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: string;
  @Column('datetime', { nullable: false })
  DFxAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}