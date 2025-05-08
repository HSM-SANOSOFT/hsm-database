import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrkCADetHorarioEmpl')
export class wrkCADetHorarioEmpl {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: any;
  @PrimaryColumn('int', { nullable: true })
  NNuRegistro?: any;
  @Column('int', { nullable: true })
  NIdCAHorario?: any;
  @Column('int', { nullable: true })
  NIdCASecHorarioDia?: any;
  @Column('int', { nullable: true })
  NNuSecuencia?: any;
  @Column('int', { nullable: true })
  NIdNoContrato?: any;
  @Column({ type: 'char' })
  CSnAutoMarcacion?: any;
  @Column('int', { nullable: true })
  NIdCATurno?: any;
  @Column('datetime', { nullable: true })
  DFxHorario?: any;

}