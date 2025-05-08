import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoPeriodo')
export class TblNoPeriodo {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuPeriodo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPeriodo?: any;
  @Column('int', { nullable: false })
  NNuCatorcena?: any;
  @Column('int', { nullable: false })
  NNuMes?: any;
  @Column('int', { nullable: false })
  NNuMesCatorcena?: any;
  @Column('datetime', { nullable: false })
  DFxIniPeriodo?: any;
  @Column('datetime', { nullable: false })
  DFxFinPeriodo?: any;
  @Column('datetime', { nullable: false })
  DFxPago?: any;
  @Column('datetime', { nullable: false })
  DFxIniProduccion?: any;
  @Column('datetime', { nullable: false })
  DFxFinProduccion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePeriodo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtRegistro?: any;
  @Column('datetime', { nullable: false })
  DFxIniPeriodoOrig?: any;
  @Column('datetime', { nullable: false })
  DFxFinPeriodoOrig?: any;

}