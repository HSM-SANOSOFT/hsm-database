import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblIvDetImplemento')
export class TblIvDetImplemento {
  @PrimaryColumn('int', { nullable: false })
  NIdIvImplemento?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdIvSolicitud?: number;
  @Column('int', { nullable: false })
  NNuSecuenciaSolicitud?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPrecioNomina?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMontoNomina?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtProcesoNovedad?: string;
  @Column('int', { nullable: false })
  NidNoPrestamo?: number;
}