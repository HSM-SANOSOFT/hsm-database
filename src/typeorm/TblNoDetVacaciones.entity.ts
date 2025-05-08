import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetVacaciones')
export class TblNoDetVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('datetime', { nullable: false })
  DFxDesde?: any;
  @Column('datetime', { nullable: false })
  DFxHasta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiaGozado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiaPagado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NNuDiasInterrumpidos?: any;
  @Column('int', { nullable: false })
  NidNoReferencia?: any;
}