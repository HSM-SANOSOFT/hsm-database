import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqVacacionProvisionAnio')
export class TblNoDetLiqVacacionProvisionAnio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('datetime', { nullable: false })
  DFxIniLiquidacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinLiquidacion?: any;
  @Column('int', { nullable: false })
  NNuDiasPendiente?: any;
  @Column('int', { nullable: false })
  NNuDiasTomados?: any;
  @Column('int', { nullable: false })
  NNuDiasLiquidar?: any;
  @Column('int', { nullable: false })
  NIdNoCrtlVacaciones?: any;

}