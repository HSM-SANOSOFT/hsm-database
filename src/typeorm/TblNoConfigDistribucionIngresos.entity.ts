import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoConfigDistribucionIngresos')
export class TblNoConfigDistribucionIngresos {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConfigDistribucion?: string;
  @Column('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtIngresoEgreso?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnDistribucion?: number;

}