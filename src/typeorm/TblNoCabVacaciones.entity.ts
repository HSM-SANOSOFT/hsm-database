import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabVacaciones')
export class TblNoCabVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('datetime', { nullable: false })
  DFxIniVacacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinVacacion?: any;
  @Column('int', { nullable: false })
  NNuDiasVacaciones?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeVacacion?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: string;
  @Column('int', { nullable: false })
  NidNoReferencia?: any;
}