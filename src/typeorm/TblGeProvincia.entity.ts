import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeProvincia')
export class TblGeProvincia {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsProvincia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRegion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeProvincia?: any;
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