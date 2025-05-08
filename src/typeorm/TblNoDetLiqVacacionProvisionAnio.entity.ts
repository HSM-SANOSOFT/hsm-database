import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqVacacionProvisionAnio')
export class TblNoDetLiqVacacionProvisionAnio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: Date;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: Date;
  @Column('int', { nullable: false })
  NNuDiasPendiente?: number;
  @Column('int', { nullable: false })
  NNuDiasTomados?: number;
  @Column('int', { nullable: false })
  NNuDiasLiquidar?: number;
  @Column('int', { nullable: false })
  NIdNoCrtlVacaciones?: number;

}