import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetSubsidio')
export class TblNoDetSubsidio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecNovedad?: any;
  @PrimaryColumn('datetime', { nullable: false })
  DFxSubsidio?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;


}