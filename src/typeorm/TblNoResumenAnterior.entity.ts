import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoResumenAnterior')
export class TblNoResumenAnterior {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column('int', { nullable: false })
  NIdNoTransferencia?: number;
  @Column('int', { nullable: false })
  NIdNoOrdenPago?: number;


}