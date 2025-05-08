import { Entity, Column } from 'typeorm';

@Entity('TblNoDetPeriodoBeneficio')
export class TblNoDetPeriodoBeneficio {
  @Column({ type: 'varchar', length: 5, nullable: true })
  CCiConcepto?: string;

  @Column('int', { nullable: true })
  NNuAnioDesde?: number;

  @Column('int', { nullable: true })
  NNuPeriodoDesde?: number;

  @Column('int', { nullable: true })
  NNuAnioHasta?: number;

  @Column('int', { nullable: true })
  NNuPeriodoHasta?: number;

  @Column({ type: 'char', length: 2, nullable: true })
  CCiTipoRegion?: string;
}
