import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabVacaciones')
export class TblNoCabVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('datetime', { nullable: false })
  DFxIniVacacion?: Date;
  @Column('datetime', { nullable: false })
  DFxFinVacacion?: Date;
  @Column('int', { nullable: false })
  NNuDiasVacaciones?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeVacacion?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: string;
  @Column('int', { nullable: false })
  NidNoReferencia?: number;
}