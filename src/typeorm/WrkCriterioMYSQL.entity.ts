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
  CCiReferencia1?: string;
  @Column({ type: 'varchar' })
  CCiReferencia2?: string;
  @Column({ type: 'varchar' })
  CCiReferencia3?: string;
  @Column({ type: 'varchar' })
  CCiReferencia4?: string;
  @Column({ type: 'varchar' })
  CCiReferencia5?: string;
  @Column({ type: 'varchar' })
  CCiReferencia6?: string;
  @Column({ type: 'varchar' })
  CCiReferencia7?: string;
  @Column({ type: 'varchar' })
  CCiReferencia8?: string;
  @Column({ type: 'varchar' })
  CCiReferencia9?: string;
  @Column({ type: 'varchar' })
  CCiReferencia10?: string;
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
  CNoReferencia1?: string;
  @Column({ type: 'varchar' })
  CNoReferencia2?: string;
  @Column({ type: 'varchar' })
  CNoReferencia3?: string;
  @Column({ type: 'varchar' })
  CNoReferencia4?: string;
  @Column({ type: 'varchar' })
  CNoReferencia5?: string;
  @Column({ type: 'varchar' })
  CNoReferencia6?: string;
  @Column({ type: 'varchar' })
  CNoReferencia7?: string;
  @Column({ type: 'varchar' })
  CNoReferencia8?: string;
  @Column({ type: 'varchar' })
  CNoReferencia9?: string;
  @Column({ type: 'varchar' })
  CNoReferencia10?: string;
  @Column({ type: 'varchar' })
  DFxFecha1?: string;
  @Column({ type: 'varchar' })
  DFxFecha2?: string;
  @Column({ type: 'varchar' })
  DFxFecha3?: string;
  @Column({ type: 'varchar' })
  DFxFecha4?: string;
  @Column({ type: 'varchar' })
  DFxFecha5?: string;

}