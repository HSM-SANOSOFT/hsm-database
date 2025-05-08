import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetOrdenPago')
export class TblNoDetOrdenPago {
  @PrimaryColumn('int', { nullable: false })
  NIdNoOrdenPago?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBeneficiario?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetOrdenPago?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaOrden?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionOrden?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalOrden?: string;
  @Column('int', { nullable: false })
  NNuControlOrden?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaPago?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionPago?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalPago?: string;
  @Column('int', { nullable: false })
  NNuControlPago?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumCheque?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeReferencia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnProcesado?: string;

}