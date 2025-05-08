import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TblCACabHorario')
export class TblCACabHorario {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina!: string;

  @Column('int', { nullable: false })
  NNuHorario!: number;

  @Column('datetime', { nullable: false })
  DFxIniHorario!: Date;

  @Column('datetime', { nullable: false })
  DFxFinHorario!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeHorario!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;

  @Column('int', { nullable: false })
  NNuAnio!: number;

  @Column('int', { nullable: false })
  NNuPeriodo!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnTurnoPeriodoAnt!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtFormaRegistro1!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtFormaRegistro2!: string;
}
