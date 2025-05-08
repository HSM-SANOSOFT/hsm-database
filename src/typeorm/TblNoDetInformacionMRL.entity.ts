import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetInformacionMRL')
export class TblNoDetInformacionMRL {
  @PrimaryColumn('int', { nullable: false })
  NIdNoMRL?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('int', { nullable: false })
  NNuCargas?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtAcreditacion?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: string;
  @Column('int', { nullable: false })
  NNuHorasParcial?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMensualizoD13?: string;
  @Column('datetime', { nullable: false })
  DFxMensualizacionD13?: Date;
  @Column('datetime', { nullable: false })
  DFxEliminaMensD13?: Date;
}