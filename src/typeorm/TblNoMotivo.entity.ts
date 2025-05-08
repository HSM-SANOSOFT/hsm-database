import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoMotivo')
export class TblNoMotivo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiModulo?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMotivo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia3?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReferencia4?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}