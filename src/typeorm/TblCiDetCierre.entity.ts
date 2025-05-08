import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetCierre')
export class TblCiDetCierre {
  @PrimaryColumn('int', { nullable: false })
  NIdCiCierre?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: number;
  @Column('int', { nullable: false })
  NNuAsiento?: number;
  @Column('int', { nullable: false })
  NNuAnioCtbl?: number;
  @Column('int', { nullable: false })
  NNuPeriodoCtbl?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuComprobante?: number;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: number;
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
  NVtDebito?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCredito?: number;
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
  NIdNoLabor?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPlantilla?: string;
}