import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetCierreDistribucion')
export class TblCiDetCierreDistribucion {
  @PrimaryColumn('int', { nullable: false })
  NIdCiCierreDistribucion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: number;
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
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: string;

}