import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLaborCuadrilla')
export class TblNoDetLaborCuadrilla {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLabor?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigen?: string;
  @Column('int', { nullable: false })
  NIdGeOrigen?: number;
  @Column('int', { nullable: false })
  NNuBoleta?: number;
  @Column('datetime', { nullable: false })
  DFxHoraLabor?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHora?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtJornal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifaOrig?: number;
}