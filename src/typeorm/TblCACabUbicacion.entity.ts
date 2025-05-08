import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabUbicacion')
export class TblCACabUbicacion {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUbicacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeUbicacion?: any;
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