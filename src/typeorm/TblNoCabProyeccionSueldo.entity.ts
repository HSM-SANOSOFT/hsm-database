import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabProyeccionSueldo')
export class TblNoCabProyeccionSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoProyeccion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuControl?: any;
  @Column('datetime', { nullable: false })
  DFxProyeccion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSueldo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProyeccionSueldo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
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
}