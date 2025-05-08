import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrkCADetHorarioDia')
export class wrkCADetHorarioDia {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: string;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: string;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: number;
  @Column('int', { nullable: true })
  NIdCAHorario?: number;
  @Column('int', { nullable: true })
  NIdCASecHorarioDia?: number;
  @Column('int', { nullable: true })
  NIdCATurno?: number;
  @Column('datetime', { nullable: true })
  DFxHorario?: Date;
}