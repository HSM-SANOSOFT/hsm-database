import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetCtrlLiquidacion')
export class TblNoDetCtrlLiquidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoCtrlLiquidacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoLiquidacion?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;

}