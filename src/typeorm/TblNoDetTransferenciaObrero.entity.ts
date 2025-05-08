import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTransferenciaObrero')
export class TblNoDetTransferenciaObrero {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtGeneracion?: any;

}