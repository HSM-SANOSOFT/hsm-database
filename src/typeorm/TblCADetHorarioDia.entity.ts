import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetHorarioDia')
export class TblCADetHorarioDia {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario!: number;

  @PrimaryColumn('int', { nullable: false })
  NIdCASecHorarioDia!: number;

  @Column('int', { nullable: false })
  NIdCATurno!: number;

  @Column('datetime', { nullable: false })
  DFxHorario!: Date;
}
