import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetConceptoFormula')
export class TblNoDetConceptoFormula {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuFormula?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCondicion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFormulaVerdadero?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFormulaFalso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;

}