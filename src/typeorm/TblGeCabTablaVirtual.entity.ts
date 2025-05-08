import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabTablaVirtual')
export class TblGeCabTablaVirtual {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTablaVirtual?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxPrograma?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTablaVirtual?: any;
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