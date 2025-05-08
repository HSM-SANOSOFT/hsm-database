import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetUtilidadDctos')
export class TblNoDetUtilidadDctos {
  @PrimaryColumn('int', { nullable: false })
  NIdNoUtilidad?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: number;

}