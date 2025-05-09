import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetHorarioEmpl')
export class WrkCADetHorarioEmpl {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: string;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: string;
  @PrimaryColumn({ type: 'varchar' })
  NNuRegistro?: string;
  @Column('int', { nullable: true })
  NIdCAHorario?: number;
  @Column('int', { nullable: true })
  NIdCASecHorarioDia?: number;
  @Column('int', { nullable: true })
  NNuSecuencia?: number;
  @Column('int', { nullable: true })
  NIdNoContrato?: number;
  @Column({ type: 'char' })
  CSnAutoMarcacion?: string;
  @Column('int', { nullable: true })
  NIdCATurno?: number;
  @Column('datetime', { nullable: true })
  DFxHorario?: Date;

}