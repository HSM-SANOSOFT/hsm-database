import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoMotivo')
export class TblNoMotivo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiModulo?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMotivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia1?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia2?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia3?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia4?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeMotivo?: string;
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
}