import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabCuadrilla')
export class TblNoCabCuadrilla {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuCuadrilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCuadrilla?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuadrilla?: any;
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
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
}