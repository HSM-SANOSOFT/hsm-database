import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCAImportaMarcaciones')
export class WrkCAImportaMarcaciones {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: any;
  @Column({ type: 'varchar' })
  CCiIdentificacion?: any;
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
  @Column('datetime', { nullable: true })
  DFxEntrada2?: any;
  @Column('datetime', { nullable: true })
  DFxSalida2?: any;
  @Column({ type: 'varchar' })
  CCiError?: any;
  @Column({ type: 'varchar' })
  CDsError?: any;


}