import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabDefinicion')
export class TblGeCabDefinicion {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDefinicion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDefinicion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtDefinicion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDefinicion?: any;
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