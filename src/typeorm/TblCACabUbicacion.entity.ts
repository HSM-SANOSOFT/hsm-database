import { Entity, Column } from 'typeorm';

@Entity('TblCACabUbicacion')
export class TblCACabUbicacion {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUbicacion!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCeUbicacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;
}
