import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoResumenAnterior')
export class TblNoResumenAnterior {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column('int', { nullable: false })
  NIdNoTransferencia?: any;
  @Column('int', { nullable: false })
  NIdNoOrdenPago?: any;


}