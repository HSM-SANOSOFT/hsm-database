import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoContrato')
export class TblNoContrato {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoMRL?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFormaPago?: any;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoDebito?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnAfeptaDistribucionCCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCiaComplementaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtModoCalculoHoras?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnPreliquidado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('int', { nullable: false })
  NIdNoSector?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnImptoRentaAsumido?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHorasExtraMaxima?: any;
  @Column('int', { nullable: false })
  NQnHorasExtra?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProveedor?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIncentivo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAvance?: any;
  @Column('datetime', { nullable: false })
  DFxHistorico?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiVendedor?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtControlVacacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarNominaPreLiquidado?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalcularRubrosLiq?: any;
}