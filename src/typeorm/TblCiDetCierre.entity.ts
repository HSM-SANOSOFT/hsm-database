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
  CCiTipoComprobante?: any;
  @Column('int', { nullable: false })
  NNuComprobante?: any;
  @Column('int', { nullable: false })
  NIdCiMovimiento?: any;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDebito?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCredito?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetalle?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoLabor?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPlantilla?: any;
}