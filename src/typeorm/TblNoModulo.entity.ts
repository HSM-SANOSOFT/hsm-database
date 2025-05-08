import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoModulo')
export class TblNoModulo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiModulo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsModulo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeModulo?: string;
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
}