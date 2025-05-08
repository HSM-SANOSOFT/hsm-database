import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabDefinicion')
export class TblGeCabDefinicion {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDefinicion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDefinicion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtDefinicion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDefinicion?: string;
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