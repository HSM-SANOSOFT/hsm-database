import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRecalculoImptoRenta')
export class TblNoDetRecalculoImptoRenta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRecalImptoRenta?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaEducacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealEducacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaVestimenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealVestimenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaVivienda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealVivienda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaSalud?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealSalud?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalImptoDescontado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRecalculo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAjusteAplicar?: any;
  @Column('int', { nullable: false })
  NNuCuota?: any;
  @Column('int', { nullable: false })
  NIdNoPrestamo?: any;
  @Column('int', { nullable: false })
  NNuPrestamo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerado?: any;

}