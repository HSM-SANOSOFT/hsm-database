import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetCierre')
export class TblCiDetCierre {
  @PrimaryColumn('int', { nullable: false })
  NIdCiCierre?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: any;
  @Column('int', { nullable: false })
  NNuAsiento?: any;
  @Column('int', { nullable: false })
  NNuAnioCtbl?: any;
  @Column('int', { nullable: false })
  NNuPeriodoCtbl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuComprobante?: any;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: any;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDebito?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCredito?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetalle?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: string;
  @Column('int', { nullable: false })
  NIdNoLabor?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPlantilla?: string;
}