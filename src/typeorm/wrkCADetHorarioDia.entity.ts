import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrkCADetHorarioDia')
export class wrkCADetHorarioDia {
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
  NIdCATurno?: any;
  @Column('datetime', { nullable: true })
  DFxHorario?: any;
}