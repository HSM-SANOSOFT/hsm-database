import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCAImportaMarcaciones')
export class WrkCAImportaMarcaciones {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: string;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: number;
  @Column({ type: 'varchar' })
  CCiIdentificacion?: string;
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
  @Column('datetime', { nullable: true })
  DFxEntrada2?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida2?: Date;
  @Column({ type: 'varchar' })
  CCiError?: string;
  @Column({ type: 'varchar' })
  CDsError?: string;


}