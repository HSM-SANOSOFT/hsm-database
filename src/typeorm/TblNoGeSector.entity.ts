import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoGeSector')
export class TblNoGeSector {
  @PrimaryColumn('int')
  NIdNoSector!: number;

  @Column({ type: 'varchar', length: 4 })
  CCiSector!: string;

  @Column({ type: 'varchar', length: 500 })
  CDsSector!: string;

  @Column({ type: 'char', length: 1 })
  CCeSector!: string;

  @Column({ type: 'varchar', length: 20 })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 20 })
  CDsEstacionIngreso!: string;

  @Column('datetime')
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  CCiUsuarioModifica?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  CDsEstacionModifica?: string;

  @Column('datetime', { nullable: true })
  DFmModifica?: Date;
}
