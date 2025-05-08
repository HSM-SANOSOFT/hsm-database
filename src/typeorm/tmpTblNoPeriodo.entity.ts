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
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtPeriodo?: string;
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
  CCePeriodo?: string;
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
}