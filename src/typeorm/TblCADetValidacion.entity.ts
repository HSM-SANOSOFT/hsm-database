import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetValidacion')
export class TblCADetValidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAValidacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdCAMovimiento?: number;
  @Column('int', { nullable: false })
  NIdCASecMvto?: number;
  @Column('datetime', { nullable: false })
  DFxValidacion?: Date;
  @Column('datetime', { nullable: false })
  DFxEntrada?: Date;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso?: Date;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida?: Date;
  @Column('datetime', { nullable: false })
  DFxRecargo50?: Date;
  @Column('datetime', { nullable: false })
  DFxRecargo100?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtRegistro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;

}