import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionVacacionesHistoria')
export class TblNoDetLiquidacionVacacionesHistoria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('int', { nullable: false })
  NNuDiasSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionSistema?: any;

}