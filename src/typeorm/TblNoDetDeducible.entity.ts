import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDeducible')
export class TblNoDetDeducible {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDeducible?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEducacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVestimenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVivienda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalud?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyeccion?: number;
}