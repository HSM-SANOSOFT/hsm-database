import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabTurno')
export class TblCACabTurno {
  @Column('int', { nullable: false })
  NIdCATurno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTurno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTurno?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtTurno?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column('datetime', { nullable: false })
  DFxReceso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaExtras?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraExtra?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAtraso?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraAtraso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnRecuperacion?: any;
  @Column('datetime', { nullable: false })
  DFxRecuperacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlReceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTurno?: any;
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
  NIdNoConceptoHoraExtra?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseHoraExtra?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraAdicional?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAdicionalDesde?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAdicionalHasta?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoExtraAdicional?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseExtraAdicional?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraNocturno?: any;
  @Column('datetime', { nullable: false })
  DFxExtraNocturnoDesde?: any;
  @Column('datetime', { nullable: false })
  DFxExtraNocturnoHasta?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoExtraNocturno?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseExtraNocturno?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtMarcacion?: any;
  @Column('datetime', { nullable: false })
  DFxEntrada2?: any;
  @Column('datetime', { nullable: false })
  DFxSalida2?: any;
  @Column('datetime', { nullable: false })
  DFxReceso2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaExtras2?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraExtra2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAtraso2?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraAtraso2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnRecuperacion2?: any;
  @Column('datetime', { nullable: false })
  DFxRecuperacion2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlReceso2?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoHoraExtra2?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseHoraExtra2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraAdicional2?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAdicionalDesde2?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAdicionalHasta2?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoExtraAdicional2?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseExtraAdicional2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraNocturno2?: any;
  @Column('datetime', { nullable: false })
  DFxExtraNocturnoDesde2?: any;
  @Column('datetime', { nullable: false })
  DFxExtraNocturnoHasta2?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoExtraNocturno2?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseExtraNocturno2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnEntreDosDias1?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraExtraHasta1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtrasEntreDosDias1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraNoctEntreDosDias1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnEntreDosDias2?: any;
  @Column('datetime', { nullable: false })
  DFxHolguraExtraHasta2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtrasEntreDosDias2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraNoctEntreDosDias2?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraAntesEntrada1?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAntesEntrada1?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoAntesEntrada1?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseAntesEntrada1?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraAntesEntrada2?: any;
  @Column('datetime', { nullable: false })
  DFxExtraAntesEntrada2?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoAntesEntrada2?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseAntesEntrada2?: any;
}