import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyePresObra')
export class TblNoDetDistribuyePresObra {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaPresObra?: number;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalCtble?: string;
  @Column('int', { nullable: false })
  NNuOrden?: number;
}