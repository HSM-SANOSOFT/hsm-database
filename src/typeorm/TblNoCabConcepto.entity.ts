import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabConcepto')
export class TblNoCabConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTitulo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDetOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtVencimiento?: any;
  @Column('datetime', { nullable: false })
  DFxVencimiento?: any;
  @Column('int', { nullable: false })
  NNuPrioridad?: any;
  @Column('int', { nullable: false })
  NNuPrioridadConcepto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtEgresoIngreso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCargo?: any;
  @Column('int', { nullable: false })
  NNuTransaccionMax?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlLabores?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDescPrestamo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIESS?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnImprimir?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIndividual?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnLiquidacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnPredeterminado?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSRI?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSobreTiempoSRI?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTransfiereEnProcesos?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnReservado?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeConcepto?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoConceptoTransferir?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoDesgloseTransferir?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnIRProyectado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoConceptoRelaIRAsumido?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NIdNoDesgloseRelaIRAsumido?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnNominaQuincena?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaIR?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAfectaColumna?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarCalendario?: any;
}