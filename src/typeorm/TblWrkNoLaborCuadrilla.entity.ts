import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblWrkNoLaborCuadrilla')
export class TblWrkNoLaborCuadrilla {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiEstacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiLabor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTarea?: any;
  @Column('int', { nullable: false })
  NNuBoleta?: any;
  @Column('datetime', { nullable: false })
  DFxHoraLabor?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuPorcentaje?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHora?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: any;
  @Column('int', { nullable: false })
  NNuCuadrilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiError?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: any;
}