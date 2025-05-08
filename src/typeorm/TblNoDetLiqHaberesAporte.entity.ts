import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesAporte')
export class TblNoDetLiqHaberesAporte {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}