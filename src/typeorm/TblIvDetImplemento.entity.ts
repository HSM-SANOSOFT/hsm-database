import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblIvDetImplemento')
export class TblIvDetImplemento {
  @PrimaryColumn('int', { nullable: false })
  NIdIvImplemento?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdIvSolicitud?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaSolicitud?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPrecioNomina?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMontoNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtProcesoNovedad?: string;
  @Column('int', { nullable: false })
  NidNoPrestamo?: any;
}