import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTransferenciaBco')
export class TblNoDetTransferenciaBco {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;

}