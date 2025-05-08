import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetTurno')
export class TblCADetTurno {
  @PrimaryColumn('int', { nullable: false })
  NIdCaTurno?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAtraso?: any;
  @Column('datetime', { nullable: false })
  DFxAtraso?: any;
  @Column('datetime', { nullable: false })
  DFxPenalidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPenalidad?: any;

}