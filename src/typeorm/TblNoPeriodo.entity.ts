import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoPeriodo')
export class TblNoPeriodo {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuPeriodo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPeriodo?: string;
  @Column('int', { nullable: false })
  NNuCatorcena?: number;
  @Column('int', { nullable: false })
  NNuMes?: number;
  @Column('int', { nullable: false })
  NNuMesCatorcena?: number;
  @Column('datetime', { nullable: false })
  DFxIniPeriodo?: Date;
  @Column('datetime', { nullable: false })
  DFxFinPeriodo?: Date;
  @Column('datetime', { nullable: false })
  DFxPago?: Date;
  @Column('datetime', { nullable: false })
  DFxIniProduccion?: Date;
  @Column('datetime', { nullable: false })
  DFxFinProduccion?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePeriodo?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CCtRegistro?: string;
  @Column('datetime', { nullable: false })
  DFxIniPeriodoOrig?: Date;
  @Column('datetime', { nullable: false })
  DFxFinPeriodoOrig?: Date;

}