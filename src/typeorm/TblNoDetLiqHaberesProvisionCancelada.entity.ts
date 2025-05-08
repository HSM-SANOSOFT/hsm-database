import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoDetLiqHaberesProvisionCancelada')
export class TblNoDetLiqHaberesProvisionCancelada {
  @PrimaryColumn('int')
  NIdNoLiqHaberes!: number;

  @PrimaryColumn('smallint')
  NNuAnio!: number;

  @PrimaryColumn('smallint')
  NNuMes!: number;

  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiArea!: string;

  @Column('smallint')
  NNuDias!: number;

  @Column('numeric', { precision: 12, scale: 2 })
  NVtIngresos!: number;

  @Column('numeric', { precision: 12, scale: 2 })
  NVtDecimoCuarto!: number;

  @Column('numeric', { precision: 12, scale: 2 })
  NVtDecimoTercero!: number;

  @Column('numeric', { precision: 12, scale: 2 })
  NVtVacaciones!: number;
}
