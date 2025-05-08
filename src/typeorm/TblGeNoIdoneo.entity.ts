import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeNoIdoneo')
export class TblGeNoIdoneo {
  @PrimaryColumn('int', { nullable: false })
  NIdGeNoIdoneo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('datetime', { nullable: false })
  DFxBaja?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeNoIdoneo?: string;
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