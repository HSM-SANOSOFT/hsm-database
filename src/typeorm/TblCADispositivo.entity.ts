import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADispositivo')
export class TblCADispositivo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDispositivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDispositivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtImportacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRefImportacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDispositivo?: string;
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