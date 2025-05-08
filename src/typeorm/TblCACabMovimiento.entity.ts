import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabMovimiento')
export class TblCACabMovimiento {
  @Column('int', { nullable: false })
  NIdCAMovimiento!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina!: string;

  @Column('int', { nullable: false })
  NNuMovimiento!: number;

  @Column('int', { nullable: false })
  NNuAnio!: number;

  @Column('int', { nullable: false })
  NNuPeriodo!: number;

  @Column('datetime', { nullable: false })
  DFxMovimiento!: Date;

  @Column('int', { nullable: false })
  NIdCaHorario!: number;

  @Column('int', { nullable: false })
  NIdCATurno!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtMovimiento!: string;

  @Column('int', { nullable: false })
  NIdCALoteMvto!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeMovimiento!: string;

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
}
