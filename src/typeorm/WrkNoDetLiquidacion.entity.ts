import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetLiquidacion')
export class WrkNoDetLiquidacion {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column('int', { nullable: true })
  NIdNoContrato?: number;

  @Column({ type: 'varchar', length: 4, nullable: true })
  CCtDetalle?: string;

  @Column('int', { nullable: true })
  NIdNoConcepto?: number;

  @Column('int', { nullable: true })
  NIdNoDesglose?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NNuConcepto?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtConcepto?: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  CTxDetObservacion?: string;

  @Column('int', { nullable: true })
  NIdNoPrestamo?: number;

  @Column('int', { nullable: true })
  NNuCuota?: number;

  @Column('datetime', { nullable: true })
  DFxLiquidacion?: Date;

  @Column({ type: 'char', length: 1, nullable: true })
  CSnDespido?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  CSnDesahucio?: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiArea?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  CSnEgresoIngreso?: string;

  @Column('int', { nullable: true })
  NNuAnio?: number;

  @Column('int', { nullable: true })
  NNuPeriodo?: number;

  @Column('int', { nullable: true })
  NNuDias?: number;
}
