import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabProyeccionSueldo')
export class TblNoCabProyeccionSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoProyeccion?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column('int', { nullable: false })
  NNuControl?: number;
  @Column('datetime', { nullable: false })
  DFxProyeccion?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSueldo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProyeccionSueldo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;
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
}