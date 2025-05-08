import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCriterioMYSQL')
export class WrkCriterioMYSQL {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: any;
  @PrimaryColumn({ type: 'varchar' })
  NNuRegistro?: any;
  @Column({ type: 'varchar' })
  CCiReferencia1?: any;
  @Column({ type: 'varchar' })
  CCiReferencia2?: any;
  @Column({ type: 'varchar' })
  CCiReferencia3?: any;
  @Column({ type: 'varchar' })
  CCiReferencia4?: any;
  @Column({ type: 'varchar' })
  CCiReferencia5?: any;
  @Column({ type: 'varchar' })
  CCiReferencia6?: any;
  @Column({ type: 'varchar' })
  CCiReferencia7?: any;
  @Column({ type: 'varchar' })
  CCiReferencia8?: any;
  @Column({ type: 'varchar' })
  CCiReferencia9?: any;
  @Column({ type: 'varchar' })
  CCiReferencia10?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia1?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia2?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia3?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia4?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia5?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia6?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia7?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia8?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia9?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia10?: any;
  @Column({ type: 'varchar' })
  CNoReferencia1?: any;
  @Column({ type: 'varchar' })
  CNoReferencia2?: any;
  @Column({ type: 'varchar' })
  CNoReferencia3?: any;
  @Column({ type: 'varchar' })
  CNoReferencia4?: any;
  @Column({ type: 'varchar' })
  CNoReferencia5?: any;
  @Column({ type: 'varchar' })
  CNoReferencia6?: any;
  @Column({ type: 'varchar' })
  CNoReferencia7?: any;
  @Column({ type: 'varchar' })
  CNoReferencia8?: any;
  @Column({ type: 'varchar' })
  CNoReferencia9?: any;
  @Column({ type: 'varchar' })
  CNoReferencia10?: any;
  @Column({ type: 'varchar' })
  DFxFecha1?: any;
  @Column({ type: 'varchar' })
  DFxFecha2?: any;
  @Column({ type: 'varchar' })
  DFxFecha3?: any;
  @Column({ type: 'varchar' })
  DFxFecha4?: any;
  @Column({ type: 'varchar' })
  DFxFecha5?: any;

}