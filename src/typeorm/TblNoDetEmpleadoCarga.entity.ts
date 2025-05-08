import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetEmpleadoCarga')
export class TblNoDetEmpleadoCarga {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCarga?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSexo?: any;
  @Column('datetime', { nullable: false })
  DFxNacimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiscapacidad?: any;
}