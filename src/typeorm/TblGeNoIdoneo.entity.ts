import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeNoIdoneo')
export class TblGeNoIdoneo {
  @PrimaryColumn('int', { nullable: false })
  NIdGeNoIdoneo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('datetime', { nullable: false })
  DFxBaja?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeNoIdoneo?: any;
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