import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetPagoPrestamo')
export class TblNoDetPagoPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NNuPagoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NNuCuota?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldoCuota?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPago?: any;

}