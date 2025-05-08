import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDeducible')
export class TblNoDetDeducible {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDeducible?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEducacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVestimenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVivienda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalud?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyeccion?: any;
}