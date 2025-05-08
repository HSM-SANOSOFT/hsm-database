import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetEmpleadoCarga')
export class TblNoDetEmpleadoCarga {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCarga?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSexo?: string;
  @Column('datetime', { nullable: false })
  DFxNacimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiscapacidad?: string;
}