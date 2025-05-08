import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoResumenNomina')
export class TblNoResumenNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
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
  CCtFormaPago?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
  @Column('int', { nullable: false })
  NIdNoTransferencia?: any;
  @Column('int', { nullable: false })
  NIdNoOrdenPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaMvtoBco?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionMvtoBco?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalMvtoBco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuAnioMvtoBco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAreaCont?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCostoCont?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCostoCont?: any;
}