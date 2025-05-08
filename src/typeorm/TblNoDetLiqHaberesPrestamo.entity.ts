import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesPrestamo')
export class TblNoDetLiqHaberesPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
}