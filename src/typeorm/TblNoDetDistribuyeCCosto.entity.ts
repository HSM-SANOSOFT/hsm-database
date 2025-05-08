import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyeCCosto')
export class TblNoDetDistribuyeCCosto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaPresObra?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaEmpl?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaCCosto?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorxConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorDistribuido?: any;
}