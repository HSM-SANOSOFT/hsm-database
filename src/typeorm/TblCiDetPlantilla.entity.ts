import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetPlantilla')
export class TblCiDetPlantilla {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantilla?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecPlantilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrigenCCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoLabor?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDebitoCredito?: any;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoPres?: any;

}