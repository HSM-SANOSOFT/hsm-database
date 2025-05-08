import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetMovimiento')
export class TblCADetMovimiento {
  @PrimaryColumn('int', { nullable: false })
  NIdCAMovimiento?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada?: any;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso?: any;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column('datetime', { nullable: false })
  DFxReceso?: any;
  @Column('datetime', { nullable: false })
  DFxRecuperacion?: any;
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
  DFxEntrada2?: any;
  @Column('datetime', { nullable: false })
  DFxSalida2?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada1Audt?: any;
  @Column('datetime', { nullable: false })
  DFxSalidaReceso1Audt?: any;
  @Column('datetime', { nullable: false })
  DFxEntradaReceso1Audt?: any;
  @Column('datetime', { nullable: false })
  DFxSalida1Audt?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada2Audt?: any;
  @Column('datetime', { nullable: false })
  DFxSalida2Audt?: any;
  @Column('datetime', { nullable: false })
  DFxMovimientoAudt?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: string;
  @Column('datetime', { nullable: false })
  DFxHorasPermiso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarAtraso?: string;
  @Column('datetime', { nullable: false })
  DFxHorasAtraso?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorAtraso?: any;

}