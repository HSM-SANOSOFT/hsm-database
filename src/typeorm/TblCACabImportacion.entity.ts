import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabImportacion')
export class TblCACabImportacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAImportacion!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDispositivo!: string;

  @Column('datetime', { nullable: false })
  DFxImportacion!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxArchivo!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeImportacion!: string;

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
