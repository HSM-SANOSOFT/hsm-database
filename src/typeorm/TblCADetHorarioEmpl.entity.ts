import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetHorarioEmpl')
export class TblCADetHorarioEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario!: number;

  @PrimaryColumn('int', { nullable: false })
  NIdCASecHorarioDia!: number;

  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia!: number;

  @Column('int', { nullable: false })
  NIdNoContrato!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutoMarcacion!: string;
}
