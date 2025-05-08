import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetValidacion')
export class WrkCADetValidacion {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn('int', { nullable: true })
  NNuRegistro?: any;
  @Column({ type: 'varchar' })
  CCiCodigo?: any;
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
  CCtRegistro?: any;
  @Column({ type: 'varchar' })
  CTxObservacion?: any;

}