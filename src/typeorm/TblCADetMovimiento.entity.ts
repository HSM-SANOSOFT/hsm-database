import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetMovimiento')
export class TblCADetMovimiento {
  @PrimaryColumn('int', { nullable: false })
  NIdCAMovimiento?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxEntrada?: Date;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso?: Date;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida?: Date;
  @Column('datetime', { nullable: false })
  DFxReceso?: Date;
  @Column('datetime', { nullable: false })
  DFxRecuperacion?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtRegistro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDispositivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtError?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnEditado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacionAudt?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiaRecuperar?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiaFavor?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHorasExtra?: string;
  @Column('datetime', { nullable: false })
  DFxEntrada2?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida2?: Date;
  @Column('datetime', { nullable: false })
  DFxEntrada1Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso1Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso1Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida1Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxEntrada2Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida2Audt?: Date;
  @Column('datetime', { nullable: false })
  DFxMovimientoAudt?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: string;
  @Column('datetime', { nullable: false })
  DFxHorasPermiso?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarAtraso?: string;
  @Column('datetime', { nullable: false })
  DFxHorasAtraso?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorAtraso?: number;

}