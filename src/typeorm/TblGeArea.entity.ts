import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeArea')
export class TblGeArea {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
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
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column('datetime', { nullable: false })
  DFxInicio?: Date;
  @Column('datetime', { nullable: false })
  DFxFin?: Date;
  @Column('int', { nullable: false })
  NIdNoConceptoDscto?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseDscto?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoLV?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseLV?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoSab?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseSab?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoDom?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseDom?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAjusteNomina?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuFactorAjuste?: number;
  @Column('datetime', { nullable: false })
  DFxInicioReal?: Date;
  @Column('datetime', { nullable: false })
  DFxFinReal?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAplicaConceptoDscto?: string;
  @Column('int', { nullable: false })
  NIdNoConceptoRecargoNoct?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseRecargoNoct?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDireccion?: string;
  @Column('datetime', { nullable: false })
  DFxHoraInicio?: Date;
  @Column('datetime', { nullable: false })
  DFxHoraFin?: Date;
  @Column('int', { nullable: false })
  NIdNoConceptoSuplExtr?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseSuplExtr?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: string;
  @Column('int', { nullable: false })
  NIdNoConceptoAjuste?: number;
  @Column('int', { nullable: false })
  NIdNoDesgloseAjuste?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoRegion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoRegistroProy?: string;
}