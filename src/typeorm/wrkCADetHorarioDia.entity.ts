import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrkCADetHorarioDia')
export class wrkCADetHorarioDia {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: any;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: any;
  @Column('int', { nullable: true })
  NIdCAHorario?: any;
  @Column('int', { nullable: true })
  NIdCASecHorarioDia?: any;
  @Column('int', { nullable: true })
  NIdCATurno?: any;
  @Column('datetime', { nullable: true })
  DFxHorario?: any;
}