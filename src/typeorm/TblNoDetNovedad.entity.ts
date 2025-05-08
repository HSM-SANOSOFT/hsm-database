import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetNovedad')
export class TblNoDetNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutomatico?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePago?: string;
  @Column('int', { nullable: false })
  NIdNoCtrlNovedadOrigen?: number;
  @Column('int', { nullable: false })
  NIdNoCtrlNovedadDestino?: number;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: number;

}