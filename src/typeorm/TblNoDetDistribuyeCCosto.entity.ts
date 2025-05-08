import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyeCCosto')
export class TblNoDetDistribuyeCCosto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaPresObra?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaEmpl?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaCCosto?: number;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorxConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorDistribuido?: number;
}