import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabNominaIndividual')
export class TblNoCabNominaIndividual {
  @Column('int', { nullable: false })
  NidNoNominaContrato?: any;
  @Column('int', { nullable: false })
  NidNoNomina?: any;
  @Column('int', { nullable: false })
  NidNoContrato?: any;
  @Column('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeNominaxEmpl?: any;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnNuevoEmpleado?: any;
}