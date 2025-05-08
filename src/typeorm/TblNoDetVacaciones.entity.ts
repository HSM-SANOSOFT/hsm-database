import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetVacaciones')
export class TblNoDetVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoVacacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('datetime', { nullable: false })
  DFxDesde?: Date;
  @Column('datetime', { nullable: false })
  DFxHasta?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiaGozado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiaPagado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NNuDiasInterrumpidos?: number;
  @Column('int', { nullable: false })
  NidNoReferencia?: number;
}