import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesCtrlVacaciones')
export class TblNoDetLiqHaberesCtrlVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarConcepto?: string;
  @Column('int', { nullable: false })
  NNuDiasTomados?: any;
  @Column('int', { nullable: false })
  NidNoVacacion?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
}