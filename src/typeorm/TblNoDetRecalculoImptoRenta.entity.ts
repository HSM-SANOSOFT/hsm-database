import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRecalculoImptoRenta')
export class TblNoDetRecalculoImptoRenta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRecalImptoRenta?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaEducacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealEducacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaVestimenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealVestimenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaVivienda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealVivienda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSistemaSalud?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRealSalud?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalImptoDescontado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRecalculo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAjusteAplicar?: number;
  @Column('int', { nullable: false })
  NNuCuota?: number;
  @Column('int', { nullable: false })
  NIdNoPrestamo?: number;
  @Column('int', { nullable: false })
  NNuPrestamo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerado?: string;

}