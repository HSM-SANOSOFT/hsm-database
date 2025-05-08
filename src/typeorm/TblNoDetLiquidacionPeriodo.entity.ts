import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionPeriodo')
export class TblNoDetLiquidacionPeriodo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;

}