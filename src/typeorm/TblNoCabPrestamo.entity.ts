import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabPrestamo')
export class TblNoCabPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuPrestamo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPrestamo?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivoPrestamo?: any;
  @Column('datetime', { nullable: false })
  DFxPrestamo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPeriocidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCalculo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCuota?: any;
  @Column('int', { nullable: false })
  NNuCuotas?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMonto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnInteres?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPrestamo?: any;
  @Column('datetime', { nullable: false })
  DFxPrimerVcmto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
  @Column('int', { nullable: false })
  NIdNoPrestamoOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDestinoPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePrestamo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAmortizacionManual?: any;
}