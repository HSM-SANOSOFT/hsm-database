import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblDetNominaProyectoDias')
export class TblDetNominaProyectoDias {
  @Column('int', { nullable: false })
  NNuControlNomina?: any;
  @Column('int', { nullable: false })
  NNuControlProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuario?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacion?: any;
}