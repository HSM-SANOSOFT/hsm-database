import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetJornal')
export class TblNoDetJornal {
  @PrimaryColumn('int', { nullable: false })
  NIdNoJornal?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtJornal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtJornal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoOrig?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseOrig?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifaOrig?: any;
  @Column('int', { nullable: false })
  NNuPersona?: any;
}