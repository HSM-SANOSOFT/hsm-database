import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetValidacion')
export class WrkCADetValidacion {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: any;
  @Column({ type: 'varchar' })
  CCiCodigo?: string;
  @Column('datetime', { nullable: true })
  DFxMarcacion?: any;
  @Column('datetime', { nullable: true })
  DFxEntrada?: any;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso?: any;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso?: any;
  @Column('datetime', { nullable: true })
  DFxSalida?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuRecargo50?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuRecargo100?: any;
  @Column({ type: 'varchar' })
  CCtRegistro?: string;
  @Column({ type: 'varchar' })
  CTxObservacion?: string;

}