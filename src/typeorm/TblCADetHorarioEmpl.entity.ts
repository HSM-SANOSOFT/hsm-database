import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetHorarioEmpl')
export class TblCADetHorarioEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdCAHorario?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdCASecHorarioDia?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutoMarcacion?: any;

}