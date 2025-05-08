import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLaborCuadrilla')
export class TblNoDetLaborCuadrilla {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLabor?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigen?: string;
  @Column('int', { nullable: false })
  NIdGeOrigen?: any;
  @Column('int', { nullable: false })
  NNuBoleta?: any;
  @Column('datetime', { nullable: false })
  DFxHoraLabor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHora?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtJornal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifaOrig?: any;
}