import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblSueldoAcumulado')
export class TblSueldoAcumulado {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column('int', { nullable: false })
  NidNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Empleado?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobresueldoacumulado?: any;
}