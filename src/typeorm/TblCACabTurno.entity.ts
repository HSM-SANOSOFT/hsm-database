import { Entity, Column } from 'typeorm';

@Entity('TblCACabTurno')
export class TblCACabTurno {
  @Column('int', { nullable: false })
  NIdCATurno!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTurno!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTurno!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtTurno!: string;

  @Column('datetime', { nullable: false })
  DFxEntrada!: Date;

  @Column('datetime', { nullable: false })
  DFxSalida!: Date;

  @Column('datetime', { nullable: false })
  DFxReceso!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaExtras!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraExtra!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAtraso!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraAtraso!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnRecuperacion!: string;

  @Column('datetime', { nullable: false })
  DFxRecuperacion!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlReceso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTurno!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoHoraExtra!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseHoraExtra!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraAdicional!: string;

  @Column('datetime', { nullable: false })
  DFxExtraAdicionalDesde!: Date;

  @Column('datetime', { nullable: false })
  DFxExtraAdicionalHasta!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoExtraAdicional!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseExtraAdicional!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraNocturno!: string;

  @Column('datetime', { nullable: false })
  DFxExtraNocturnoDesde!: Date;

  @Column('datetime', { nullable: false })
  DFxExtraNocturnoHasta!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoExtraNocturno!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseExtraNocturno!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtMarcacion!: string;

  @Column('datetime', { nullable: false })
  DFxEntrada2!: Date;

  @Column('datetime', { nullable: false })
  DFxSalida2!: Date;

  @Column('datetime', { nullable: false })
  DFxReceso2!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaExtras2!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraExtra2!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaAtraso2!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraAtraso2!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnRecuperacion2!: string;

  @Column('datetime', { nullable: false })
  DFxRecuperacion2!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlReceso2!: string;

  @Column('int', { nullable: false })
  NIdNoConceptoHoraExtra2!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseHoraExtra2!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraAdicional2!: string;

  @Column('datetime', { nullable: false })
  DFxExtraAdicionalDesde2!: Date;

  @Column('datetime', { nullable: false })
  DFxExtraAdicionalHasta2!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoExtraAdicional2!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseExtraAdicional2!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnHoraExtraNocturno2!: string;

  @Column('datetime', { nullable: false })
  DFxExtraNocturnoDesde2!: Date;

  @Column('datetime', { nullable: false })
  DFxExtraNocturnoHasta2!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoExtraNocturno2!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseExtraNocturno2!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnEntreDosDias1!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraExtraHasta1!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtrasEntreDosDias1!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraNoctEntreDosDias1!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnEntreDosDias2!: string;

  @Column('datetime', { nullable: false })
  DFxHolguraExtraHasta2!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtrasEntreDosDias2!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraNoctEntreDosDias2!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraAntesEntrada1!: string;

  @Column('datetime', { nullable: false })
  DFxExtraAntesEntrada1!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoAntesEntrada1!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseAntesEntrada1!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnExtraAntesEntrada2!: string;

  @Column('datetime', { nullable: false })
  DFxExtraAntesEntrada2!: Date;

  @Column('int', { nullable: false })
  NIdNoConceptoAntesEntrada2!: number;

  @Column('int', { nullable: false })
  NIdNoDesgloseAntesEntrada2!: number;
}
