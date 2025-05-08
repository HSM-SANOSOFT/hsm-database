import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetPagoPrestamo')
export class TblNoDetPagoPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NNuPagoPrestamo?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NNuCuota?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldoCuota?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPago?: number;

}