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
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeVacacion?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: any;
  @Column('int', { nullable: false })
  NidNoReferencia?: any;
}