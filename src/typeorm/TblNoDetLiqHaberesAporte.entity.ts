import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesAporte')
export class TblNoDetLiqHaberesAporte {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}