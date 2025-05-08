import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetCtrlNovedad')
export class TblNoDetCtrlNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoCtrlNovedad?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoNovedadOrigen?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaOrigen?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoOrigen?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseOrigen?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadOrigen?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoOrigen?: any;
  @Column('int', { nullable: false })
  NIdNoNovedadDestino?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaDestino?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoDestino?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseDestino?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadDestino?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoDestino?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;

}