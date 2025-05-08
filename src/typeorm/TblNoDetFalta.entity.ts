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
  CCtFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDescuentoVacacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReportaFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NNuAnioVacacion?: any;
  @Column('datetime', { nullable: false })
  DFxInicioVacacion?: any;
  @Column('datetime', { nullable: false })
  DFxFinVacacion?: any;
}