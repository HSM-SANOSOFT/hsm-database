import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetVacacionesPlanificadas')
export class TblNoDetVacacionesPlanificadas {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('datetime', { nullable: false })
  DFxDesde?: Date;
  @Column('datetime', { nullable: false })
  DFxHasta?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeVacacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
}