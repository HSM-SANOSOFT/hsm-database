import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetMovimiento')
export class WrkCADetMovimiento {
  @Column('int', { nullable: true })
  NIdCAMovimiento?: number;
  @Column('int', { nullable: true })
  NNuSecuencia?: number;
  @Column('int', { nullable: true })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: true })
  DFxEntrada?: Date;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso?: Date;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida?: Date;
  @Column('datetime', { nullable: true })
  DFxReceso?: Date;
  @Column('datetime', { nullable: true })
  DFxRecuperacion?: Date;
  @Column({ type: 'varchar' })
  CCtRegistro?: string;
  @Column({ type: 'varchar' })
  CCiDispositivo?: string;
  @Column({ type: 'varchar' })
  CCiUbicacion?: string;
  @Column({ type: 'varchar' })
  CCtError?: string;
  @Column({ type: 'varchar' })
  CTxObservacion?: string;
  @Column({ type: 'varchar' })
  CSnEditado?: string;
  @Column({ type: 'varchar' })
  CCiMotivo?: string;
  @Column({ type: 'varchar' })
  CTxObservacionAudt?: string;
  @Column({ type: 'char' })
  CSnDiaRecuperar?: string;
  @Column({ type: 'char' })
  CSnDiaFavor?: string;
  @Column({ type: 'char' })
  CSnHorasExtra?: string;
  @Column('datetime', { nullable: true })
  DFxEntrada2?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida2?: Date;
  @Column('datetime', { nullable: true })
  DFxEntrada1Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso1Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso1Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida1Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxEntrada2Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxSalida2Audt?: Date;
  @Column('datetime', { nullable: true })
  DFxMovimientoAudt?: Date;
  @Column({ type: 'varchar' })
  CDsError?: string;
  @Column('datetime', { nullable: true })
  DFxHorasPermiso?: Date;
  @Column({ type: 'char' })
  CSnGenerarAtraso?: string;
  @Column('datetime', { nullable: true })
  DFxHorasAtraso?: Date;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtValorAtraso?: number;
}