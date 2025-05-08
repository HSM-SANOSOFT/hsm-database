import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLoteLiquidacion')
export class TblNoDetLoteLiquidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLoteLiquidacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxLiquidacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivoVistoBueno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDespido?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDeshaucio?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoLiquidacion?: any;

}