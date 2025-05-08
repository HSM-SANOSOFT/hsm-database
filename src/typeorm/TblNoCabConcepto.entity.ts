import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabConcepto')
export class TblNoCabConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTitulo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDetOrigen?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtVencimiento?: string;
  @Column('datetime', { nullable: false })
  DFxVencimiento?: any;
  @Column('int', { nullable: false })
  NNuPrioridad?: any;
  @Column('int', { nullable: false })
  NNuPrioridadConcepto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtEgresoIngreso?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCargo?: string;
  @Column('int', { nullable: false })
  NNuTransaccionMax?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlLabores?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDescPrestamo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIESS?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnImprimir?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIndividual?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnLiquidacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnPredeterminado?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSRI?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSobreTiempoSRI?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaNomina?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTransfiereEnProcesos?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReservado?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeConcepto?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoConceptoTransferir?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoDesgloseTransferir?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIRProyectado?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoConceptoRelaIRAsumido?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoDesgloseRelaIRAsumido?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnNominaQuincena?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaIR?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAfectaColumna?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarCalendario?: string;
}