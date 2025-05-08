import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeArea')
export class TblGeArea {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia1?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('datetime', { nullable: false })
  DFxInicio?: any;
  @Column('datetime', { nullable: false })
  DFxFin?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoDscto?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseDscto?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoLV?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseLV?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoSab?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseSab?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoDom?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseDom?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAjusteNomina?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuFactorAjuste?: any;
  @Column('datetime', { nullable: false })
  DFxInicioReal?: any;
  @Column('datetime', { nullable: false })
  DFxFinReal?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAplicaConceptoDscto?: string;
  @Column('int', { nullable: false })
  NIdNoConceptoRecargoNoct?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseRecargoNoct?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDireccion?: string;
  @Column('datetime', { nullable: false })
  DFxHoraInicio?: any;
  @Column('datetime', { nullable: false })
  DFxHoraFin?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoSuplExtr?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseSuplExtr?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: string;
  @Column('int', { nullable: false })
  NIdNoConceptoAjuste?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseAjuste?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoRegion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoRegistroProy?: string;
}