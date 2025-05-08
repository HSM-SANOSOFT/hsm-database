import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionVacaciones')
export class TblNoDetLiquidacionVacaciones {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqVacaciones?: any;
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
  NNuConceptoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoSistema?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnEgresoIngreso?: string;

}