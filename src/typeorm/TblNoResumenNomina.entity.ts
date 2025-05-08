import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoResumenNomina')
export class TblNoResumenNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEgresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFormaPago?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: string;
  @Column('int', { nullable: false })
  NIdNoTransferencia?: number;
  @Column('int', { nullable: false })
  NIdNoOrdenPago?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaMvtoBco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionMvtoBco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalMvtoBco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoMvtoBco?: string;
  @Column('int', { nullable: false })
  NNuSecuenciaMvtoBco?: number;
  @Column('int', { nullable: false })
  NNuAnioMvtoBco?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAreaCont?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCostoCont?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCostoCont?: string;
}