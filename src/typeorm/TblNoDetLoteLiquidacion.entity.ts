import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLoteLiquidacion')
export class TblNoDetLoteLiquidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLoteLiquidacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxLiquidacion?: Date;
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
  NIdNoLiquidacion?: number;

}