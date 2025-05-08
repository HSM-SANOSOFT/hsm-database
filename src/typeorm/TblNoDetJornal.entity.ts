import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetJornal')
export class TblNoDetJornal {
  @PrimaryColumn('int', { nullable: false })
  NIdNoJornal?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtJornal?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtJornal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoOrig?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseOrig?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifaOrig?: number;
  @Column('int', { nullable: false })
  NNuPersona?: number;
}