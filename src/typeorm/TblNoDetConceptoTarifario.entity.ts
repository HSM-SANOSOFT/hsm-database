import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetConceptoTarifario')
export class TblNoDetConceptoTarifario {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConceptoTarifario?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetConceptoTarifario?: any;
  @Column('int', { nullable: false })
  NNuPersona?: any;

}