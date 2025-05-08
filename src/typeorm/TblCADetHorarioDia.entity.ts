import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetHorarioDia')
export class TblCADetHorarioDia {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdCASecHorarioDia?: any;
  @Column('int', { nullable: false })
  NIdCATurno?: any;
  @Column('datetime', { nullable: false })
  DFxHorario?: any;

}