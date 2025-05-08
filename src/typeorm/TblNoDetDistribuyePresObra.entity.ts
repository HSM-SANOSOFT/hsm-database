import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyePresObra')
export class TblNoDetDistribuyePresObra {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaPresObra?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalCtble?: string;
  @Column('int', { nullable: false })
  NNuOrden?: any;
}