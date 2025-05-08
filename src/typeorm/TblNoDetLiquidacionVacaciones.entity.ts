import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionVacaciones')
export class TblNoDetLiquidacionVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: number;
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
  NNuConceptoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoSistema?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnEgresoIngreso?: string;

}