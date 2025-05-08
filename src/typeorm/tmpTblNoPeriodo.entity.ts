import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tmpTblNoPeriodo')
export class tmpTblNoPeriodo {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
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
}