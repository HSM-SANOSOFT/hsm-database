import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionVacacionesHistoria')
export class TblNoDetLiquidacionVacacionesHistoria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('int', { nullable: false })
  NNuDiasSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionSistema?: number;

}