import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetMovimientoEmpl')
export class TblCADetMovimientoEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdCAMovimiento?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxLaborado?: any;
  @Column('datetime', { nullable: false })
  DFxAtraso?: any;
  @Column('datetime', { nullable: false })
  DFxRecuperacion?: any;
  @Column('datetime', { nullable: false })
  DFxPago?: any;
  @Column('datetime', { nullable: false })
  DFxRecargo25?: any;
  @Column('datetime', { nullable: false })
  DFxRecargo50?: any;
  @Column('datetime', { nullable: false })
  DFxRecargo100?: any;
  @Column('datetime', { nullable: false })
  DFxHENormal?: any;
  @Column('datetime', { nullable: false })
  DFxHENocturna?: any;
  @Column('datetime', { nullable: false })
  DFxHEAdicionalNocturna?: any;
  @Column('int', { nullable: false })
  NIdCATurno?: any;
  @Column('datetime', { nullable: false })
  DFxExtraFeriadoFinSemana?: any;
  @Column('datetime', { nullable: false })
  DFxLaborado2?: any;
  @Column('datetime', { nullable: false })
  DFxAtraso2?: any;
  @Column('datetime', { nullable: false })
  DFxRecuperacion2?: any;
  @Column('datetime', { nullable: false })
  DFxPago2?: any;
  @Column('datetime', { nullable: false })
  DFxHENormal2?: any;
  @Column('datetime', { nullable: false })
  DFxHENocturna2?: any;
  @Column('datetime', { nullable: false })
  DFxHEAdicionalNocturna2?: any;
  @Column('datetime', { nullable: false })
  DFxHEAfavor?: any;
  @Column('datetime', { nullable: false })
  DFxHEAntesEntrada1?: any;
  @Column('datetime', { nullable: false })
  DFxHEAntesEntrada2?: any;

}