import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeProvincia')
export class TblGeProvincia {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsProvincia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRegion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeProvincia?: string;
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