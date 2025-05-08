import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProyeccionSueldo')
export class TblNoDetProyeccionSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoProyeccion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecProyeccion?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoReal?: number;
  @Column('datetime', { nullable: false })
  DFxVigencia?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProyeccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;

}