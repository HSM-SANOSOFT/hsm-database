import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetPrestamo')
export class TblNoDetPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoDscto?: number;
  @Column('datetime', { nullable: false })
  DFxVcmto?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCuota?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtInteres?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotal?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuota?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldo?: number;
  @Column('int', { nullable: false })
  NIdNoNomina?: number;
  @Column('int', { nullable: false })
  NIdNoSecNomina?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPago?: number;

}