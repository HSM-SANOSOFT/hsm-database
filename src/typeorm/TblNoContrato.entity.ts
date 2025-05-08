import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoContrato')
export class TblNoContrato {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoContrato?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoMRL?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFormaPago?: string;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoDebito?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnAfeptaDistribucionCCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCiaComplementaria?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtModoCalculoHoras?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnPreliquidado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeContrato?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('int', { nullable: false })
  NIdNoSector?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnImptoRentaAsumido?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHorasExtraMaxima?: string;
  @Column('int', { nullable: false })
  NQnHorasExtra?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProveedor?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIncentivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAvance?: string;
  @Column('datetime', { nullable: false })
  DFxHistorico?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiVendedor?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtControlVacacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarNominaPreLiquidado?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalcularRubrosLiq?: string;
}