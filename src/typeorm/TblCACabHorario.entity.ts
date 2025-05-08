import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabHorario')
export class TblCACabHorario {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuHorario?: any;
  @Column('datetime', { nullable: false })
  DFxIniHorario?: any;
  @Column('datetime', { nullable: false })
  DFxFinHorario?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeHorario?: any;
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
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTurnoPeriodoAnt?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtFormaRegistro1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtFormaRegistro2?: any;
}