import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabLaborCuadrilla')
export class TblNoCabLaborCuadrilla {
  @Column('int', { nullable: false })
  NIdNoLabor?: any;
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
  DFxLabor?: any;
  @Column('int', { nullable: false })
  NNuLabor?: any;
  @Column('int', { nullable: false })
  NNuCuadrilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NIdNoJornal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLabor?: any;
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
  CCiUsuarioAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: any;
  @Column('datetime', { nullable: false })
  DFxAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
}