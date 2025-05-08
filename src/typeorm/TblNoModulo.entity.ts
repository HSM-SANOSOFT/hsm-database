import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoModulo')
export class TblNoModulo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiModulo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsModulo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeModulo?: any;
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