import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetCtrlNovedad')
export class TblNoDetCtrlNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoCtrlNovedad?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoNovedadOrigen?: number;
  @Column('int', { nullable: false })
  NNuSecuenciaOrigen?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoOrigen?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseOrigen?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadOrigen?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoOrigen?: number;
  @Column('int', { nullable: false })
  NIdNoNovedadDestino?: number;
  @Column('int', { nullable: false })
  NNuSecuenciaDestino?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoDestino?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseDestino?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadDestino?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoDestino?: number;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: number;

}