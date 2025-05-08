import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTransferenciaObrero')
export class TblNoDetTransferenciaObrero {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoJefeInmediato?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtGeneracion?: string;

}