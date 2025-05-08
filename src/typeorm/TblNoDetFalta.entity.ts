import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetFalta')
export class TblNoDetFalta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoFalta?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFalta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDescuentoVacacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReportaFalta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NNuAnioVacacion?: any;
  @Column('datetime', { nullable: false })
  DFxInicioVacacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinVacacion?: any;
}