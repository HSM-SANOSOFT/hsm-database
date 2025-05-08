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
  CCtRegistro?: any;
  @Column({ type: 'varchar' })
  CCiDispositivo?: any;
  @Column({ type: 'varchar' })
  CCiUbicacion?: any;
  @Column({ type: 'varchar' })
  CCtError?: any;
  @Column({ type: 'varchar' })
  CTxObservacion?: any;
  @Column({ type: 'varchar' })
  CSnEditado?: any;
  @Column({ type: 'varchar' })
  CCiMotivo?: any;
  @Column({ type: 'varchar' })
  CTxObservacionAudt?: any;
  @Column({ type: 'char' })
  CSnDiaRecuperar?: any;
  @Column({ type: 'char' })
  CSnDiaFavor?: any;
  @Column({ type: 'char' })
  CSnHorasExtra?: any;
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
  CDsError?: any;
  @Column('datetime', { nullable: true })
  DFxHorasPermiso?: any;
  @Column({ type: 'char' })
  CSnGenerarAtraso?: any;
  @Column('datetime', { nullable: true })
  DFxHorasAtraso?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtValorAtraso?: any;
}