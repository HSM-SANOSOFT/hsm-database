import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetSubsidio')
export class TblNoDetSubsidio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecNovedad?: number;
  @PrimaryColumn('datetime', { nullable: false })
  DFxSubsidio?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;


}