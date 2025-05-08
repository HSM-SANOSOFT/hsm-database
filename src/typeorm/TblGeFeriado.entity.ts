import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeFeriado')
export class TblGeFeriado {
  @PrimaryColumn('int', { nullable: false })
  NIdGeFeriado?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsFeriado?: string;
  @Column('datetime', { nullable: false })
  DFxIniFeriado?: Date;
  @Column('datetime', { nullable: false })
  DFxFinFeriado?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeFeriado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
}