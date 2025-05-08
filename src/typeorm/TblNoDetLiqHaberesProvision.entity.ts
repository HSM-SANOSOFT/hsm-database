import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesProvision')
export class TblNoDetLiqHaberesProvision {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuMes?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;

}