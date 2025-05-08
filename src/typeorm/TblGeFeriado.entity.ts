import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeFeriado')
export class TblGeFeriado {
  @PrimaryColumn('int', { nullable: false })
  NIdGeFeriado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsFeriado?: string;
  @Column('datetime', { nullable: false })
  DFxIniFeriado?: any;
  @Column('datetime', { nullable: false })
  DFxFinFeriado?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeFeriado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
}