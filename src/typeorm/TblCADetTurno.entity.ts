import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetTurno')
export class TblCADetTurno {
  @PrimaryColumn('int', { nullable: false })
  NIdCaTurno?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAtraso?: string;
  @Column('datetime', { nullable: false })
  DFxAtraso?: Date;
  @Column('datetime', { nullable: false })
  DFxPenalidad?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPenalidad?: number;

}