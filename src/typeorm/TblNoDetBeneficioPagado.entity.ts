import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetBeneficioPagado')
export class TblNoDetBeneficioPagado {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NNuAnioDesde?: number;
  @Column('int', { nullable: false })
  NNuPeriodoDesde?: number;
  @Column('int', { nullable: false })
  NNuAnioHasta?: number;
  @Column('int', { nullable: false })
  NNuPeriodoHasta?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnProvision?: string;
  @Column('int', { nullable: false })
  NNuAnioVacacionCanc?: number;
  @Column('int', { nullable: false })
  NNuDiasVacacionCanc?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoRegion?: string;

}