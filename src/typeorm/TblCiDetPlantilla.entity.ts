import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetPlantilla')
export class TblCiDetPlantilla {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantilla?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecPlantilla?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigenCCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: string;
  @Column('int', { nullable: false })
  NIdNoLabor?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
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