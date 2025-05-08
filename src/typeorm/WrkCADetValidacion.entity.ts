import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetValidacion')
export class WrkCADetValidacion {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: string;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: number;
  @Column({ type: 'varchar' })
  CCiCodigo?: string;
  @Column('datetime', { nullable: true })
  DFxMarcacion?: Date;
  @Column('datetime', { nullable: true })
  DFxEntrada?: Date;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso?: Date;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida?: Date;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuRecargo50?: number;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuRecargo100?: number;
  @Column({ type: 'varchar' })
  CCtRegistro?: string;
  @Column({ type: 'varchar' })
  CTxObservacion?: string;

}