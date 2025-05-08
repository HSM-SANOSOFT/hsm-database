import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblWrkNoLaborCuadrilla')
export class TblWrkNoLaborCuadrilla {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiEstacion?: string;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiLabor?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTarea?: string;
  @Column('int', { nullable: false })
  NNuBoleta?: number;
  @Column('datetime', { nullable: false })
  DFxHoraLabor?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuPorcentaje?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHora?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: string;
  @Column('int', { nullable: false })
  NNuCuadrilla?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiError?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: string;
}