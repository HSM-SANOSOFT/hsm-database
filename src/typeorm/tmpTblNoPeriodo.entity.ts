import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tmpTblNoPeriodo')
export class tmpTblNoPeriodo {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
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
}