import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetConceptoTarifario')
export class TblNoDetConceptoTarifario {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConceptoTarifario?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetConceptoTarifario?: string;
  @Column('int', { nullable: false })
  NNuPersona?: number;

}