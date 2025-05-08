import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADispositivo')
export class TblCADispositivo {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDispositivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDispositivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtImportacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRefImportacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDispositivo?: any;
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