import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoResumenNomina')
export class TblNoResumenNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEgresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFormaPago?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: string;
  @Column('int', { nullable: false })
  NIdNoTransferencia?: any;
  @Column('int', { nullable: false })
  NIdNoOrdenPago?: any;
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
  NNuSecuenciaMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuAnioMvtoBco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAreaCont?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCostoCont?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCostoCont?: string;
}