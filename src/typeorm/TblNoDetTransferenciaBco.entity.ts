import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTransferenciaBco')
export class TblNoDetTransferenciaBco {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoNomina?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;

}