import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetUtilidadDctos')
export class TblNoDetUtilidadDctos {
  @PrimaryColumn('int', { nullable: false })
  NIdNoUtilidad?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: any;

}