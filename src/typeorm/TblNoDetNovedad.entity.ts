import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetNovedad')
export class TblNoDetNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutomatico?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePago?: string;
  @Column('int', { nullable: false })
  NIdNoCtrlNovedadOrigen?: any;
  @Column('int', { nullable: false })
  NIdNoCtrlNovedadDestino?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;

}