import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetPrestamo')
export class TblNoDetPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuCuota?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoDscto?: any;
  @Column('datetime', { nullable: false })
  DFxVcmto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCuota?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtInteres?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuota?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSaldo?: any;
  @Column('int', { nullable: false })
  NIdNoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoSecNomina?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPago?: any;

}