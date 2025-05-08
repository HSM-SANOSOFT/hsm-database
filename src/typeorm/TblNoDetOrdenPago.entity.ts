import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetOrdenPago')
export class TblNoDetOrdenPago {
  @PrimaryColumn('int', { nullable: false })
  NIdNoOrdenPago?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBeneficiario?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetOrdenPago?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaOrden?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionOrden?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalOrden?: any;
  @Column('int', { nullable: false })
  NNuControlOrden?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaPago?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionPago?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalPago?: any;
  @Column('int', { nullable: false })
  NNuControlPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumCheque?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnProcesado?: any;

}