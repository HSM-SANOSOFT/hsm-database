import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabTablaVirtual')
export class TblGeCabTablaVirtual {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTablaVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxPrograma?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTablaVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}