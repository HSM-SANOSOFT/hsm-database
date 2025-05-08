import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetCtrlLiquidacion')
export class TblNoDetCtrlLiquidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoCtrlLiquidacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoLiquidacion?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;

}