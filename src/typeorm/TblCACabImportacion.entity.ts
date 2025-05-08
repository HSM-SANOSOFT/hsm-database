import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabImportacion')
export class TblCACabImportacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAImportacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDispositivo?: any;
  @Column('datetime', { nullable: false })
  DFxImportacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxArchivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeImportacion?: any;
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