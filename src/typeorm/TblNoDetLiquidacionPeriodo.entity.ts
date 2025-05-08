import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionPeriodo')
export class TblNoDetLiquidacionPeriodo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;

}