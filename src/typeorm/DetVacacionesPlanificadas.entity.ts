import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('DetVacacionesPlanificadas')
export class DetVacacionesPlanificadas {
  @PrimaryColumn('number')
  NIdNoVacacion!: number;

  @PrimaryColumn('number')
  NNuSecuencia!: number;

  @Column('date')
  DFxDesde!: Date;

  @Column('date')
  DFxHasta!: Date;

  @Column({ type: 'varchar', length: 1, nullable: true })
  CCeVacacion?: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  CTxObservacion?: string;
}
