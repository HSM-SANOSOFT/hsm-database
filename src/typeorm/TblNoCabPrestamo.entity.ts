import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabPrestamo')
export class TblNoCabPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuPrestamo?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPrestamo?: string;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivoPrestamo?: string;
  @Column('datetime', { nullable: false })
  DFxPrestamo?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPeriocidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCalculo?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCuota?: number;
  @Column('int', { nullable: false })
  NNuCuotas?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMonto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnInteres?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPrestamo?: number;
  @Column('datetime', { nullable: false })
  DFxPrimerVcmto?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: string;
  @Column('int', { nullable: false })
  NIdNoPrestamoOrigen?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDestinoPago?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigen?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePrestamo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAmortizacionManual?: string;
}