import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetValidacion')
export class TblCADetValidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAValidacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdCAMovimiento?: any;
  @Column('int', { nullable: false })
  NIdCASecMvto?: any;
  @Column('datetime', { nullable: false })
  DFxValidacion?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada?: any;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso?: any;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column('datetime', { nullable: false })
  DFxRecargo50?: any;
  @Column('datetime', { nullable: false })
  DFxRecargo100?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtRegistro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;

}