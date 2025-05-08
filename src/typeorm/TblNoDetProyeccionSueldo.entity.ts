import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProyeccionSueldo')
export class TblNoDetProyeccionSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoProyeccion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecProyeccion?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoReal?: any;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProyeccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;

}