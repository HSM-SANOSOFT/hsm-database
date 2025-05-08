import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetCtrlNovedad')
export class WrkNoDetCtrlNovedad {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuSecuencia!: number;

  @Column('int', { nullable: true })
  NIdNoContrato?: number;

  @Column('int', { nullable: true })
  NIdNoNovedadOrigen?: number;

  @Column('int', { nullable: true })
  NNuSecuenciaOrigen?: number;

  @Column('int', { nullable: true })
  NIdNoConceptoOrigen?: number;

  @Column('int', { nullable: true })
  NIdNoDesgloseOrigen?: number;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NNuCantidadOrigen?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtConceptoOrigen?: number;
}
