import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCanton')
export class TblGeCanton {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCanton?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCanton?: any;
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