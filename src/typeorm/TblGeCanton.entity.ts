import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCanton')
export class TblGeCanton {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCanton?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCanton?: string;
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