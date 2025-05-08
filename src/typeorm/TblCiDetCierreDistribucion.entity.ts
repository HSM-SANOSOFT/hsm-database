import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetCierreDistribucion')
export class TblCiDetCierreDistribucion {
  @PrimaryColumn('int', { nullable: false })
  NIdCiCierreDistribucion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: any;
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
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: any;

}