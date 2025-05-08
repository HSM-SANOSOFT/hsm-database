import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesProvision')
export class TblNoDetLiqHaberesProvision {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuMes?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;

}