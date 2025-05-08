import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetPlantillaDistribucion')
export class TblCiDetPlantillaDistribucion {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantilla?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecPlantilla?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtSituacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDistribuir?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtConcepto?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDebitoCredito?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: string;
}