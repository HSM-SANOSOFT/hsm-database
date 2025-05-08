import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiqHaberesPrestamo')
export class TblNoDetLiqHaberesPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuento?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;
}