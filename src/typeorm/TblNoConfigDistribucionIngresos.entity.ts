import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoConfigDistribucionIngresos')
export class TblNoConfigDistribucionIngresos {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConfigDistribucion?: string;
  @Column('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtIngresoEgreso?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnDistribucion?: any;

}