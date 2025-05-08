import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetInformacionMRL')
export class TblNoDetInformacionMRL {
  @PrimaryColumn('int', { nullable: false })
  NIdNoMRL?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('int', { nullable: false })
  NNuCargas?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtAcreditacion?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: string;
  @Column('int', { nullable: false })
  NNuHorasParcial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMensualizoD13?: string;
  @Column('datetime', { nullable: false })
  DFxMensualizacionD13?: any;
  @Column('datetime', { nullable: false })
  DFxEliminaMensD13?: any;
}