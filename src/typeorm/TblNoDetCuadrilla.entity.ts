import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetCuadrilla')
export class TblNoDetCuadrilla {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @PrimaryColumn('int', { nullable: false })
  NNuCuadrilla?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;

}