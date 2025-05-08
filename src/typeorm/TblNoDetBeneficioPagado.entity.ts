import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetBeneficioPagado')
export class TblNoDetBeneficioPagado {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NNuAnioDesde?: any;
  @Column('int', { nullable: false })
  NNuPeriodoDesde?: any;
  @Column('int', { nullable: false })
  NNuAnioHasta?: any;
  @Column('int', { nullable: false })
  NNuPeriodoHasta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnProvision?: string;
  @Column('int', { nullable: false })
  NNuAnioVacacionCanc?: any;
  @Column('int', { nullable: false })
  NNuDiasVacacionCanc?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoRegion?: string;

}