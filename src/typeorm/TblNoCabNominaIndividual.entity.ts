import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabNominaIndividual')
export class TblNoCabNominaIndividual {
  @Column('int', { nullable: false })
  NidNoNominaContrato?: number;
  @Column('int', { nullable: false })
  NidNoNomina?: number;
  @Column('int', { nullable: false })
  NidNoContrato?: number;
  @Column('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeNominaxEmpl?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnNuevoEmpleado?: string;
}