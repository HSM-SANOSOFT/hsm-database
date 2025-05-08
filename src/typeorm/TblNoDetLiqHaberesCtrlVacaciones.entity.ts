import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesCtrlVacaciones')
export class TblNoDetLiqHaberesCtrlVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: Date;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarConcepto?: string;
  @Column('int', { nullable: false })
  NNuDiasTomados?: number;
  @Column('int', { nullable: false })
  NidNoVacacion?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
}