import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetVacacionesPlanificadas')
export class TblNoDetVacacionesPlanificadas {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('datetime', { nullable: false })
  DFxDesde?: any;
  @Column('datetime', { nullable: false })
  DFxHasta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeVacacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
}