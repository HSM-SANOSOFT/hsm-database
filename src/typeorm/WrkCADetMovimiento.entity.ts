import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCADetMovimiento')
export class WrkCADetMovimiento {
  @Column('int', { nullable: true })
  NIdCAMovimiento?: any;
  @Column('int', { nullable: true })
  NNuSecuencia?: any;
  @Column('int', { nullable: true })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: true })
  DFxEntrada?: any;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso?: any;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso?: any;
  @Column('datetime', { nullable: true })
  DFxSalida?: any;
  @Column('datetime', { nullable: true })
  DFxReceso?: any;
  @Column('datetime', { nullable: true })
  DFxRecuperacion?: any;
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
  DFxEntrada2?: any;
  @Column('datetime', { nullable: true })
  DFxSalida2?: any;
  @Column('datetime', { nullable: true })
  DFxEntrada1Audt?: any;
  @Column('datetime', { nullable: true })
  DFxSalidaReceso1Audt?: any;
  @Column('datetime', { nullable: true })
  DFxEntradaReceso1Audt?: any;
  @Column('datetime', { nullable: true })
  DFxSalida1Audt?: any;
  @Column('datetime', { nullable: true })
  DFxEntrada2Audt?: any;
  @Column('datetime', { nullable: true })
  DFxSalida2Audt?: any;
  @Column('datetime', { nullable: true })
  DFxMovimientoAudt?: any;
  @Column({ type: 'varchar' })
  CDsError?: string;
  @Column('datetime', { nullable: true })
  DFxHorasPermiso?: any;
  @Column({ type: 'char' })
  CSnGenerarAtraso?: string;
  @Column('datetime', { nullable: true })
  DFxHorasAtraso?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtValorAtraso?: any;
}