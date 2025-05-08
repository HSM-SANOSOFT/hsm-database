import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetMovimientoEmpl')
export class TblCADetMovimientoEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdCAMovimiento?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxLaborado?: Date;
  @Column('datetime', { nullable: false })
  DFxAtraso?: Date;
  @Column('datetime', { nullable: false })
  DFxRecuperacion?: Date;
  @Column('datetime', { nullable: false })
  DFxPago?: Date;
  @Column('datetime', { nullable: false })
  DFxRecargo25?: Date;
  @Column('datetime', { nullable: false })
  DFxRecargo50?: Date;
  @Column('datetime', { nullable: false })
  DFxRecargo100?: Date;
  @Column('datetime', { nullable: false })
  DFxHENormal?: Date;
  @Column('datetime', { nullable: false })
  DFxHENocturna?: Date;
  @Column('datetime', { nullable: false })
  DFxHEAdicionalNocturna?: Date;
  @Column('int', { nullable: false })
  NIdCATurno?: number;
  @Column('datetime', { nullable: false })
  DFxExtraFeriadoFinSemana?: Date;
  @Column('datetime', { nullable: false })
  DFxLaborado2?: Date;
  @Column('datetime', { nullable: false })
  DFxAtraso2?: Date;
  @Column('datetime', { nullable: false })
  DFxRecuperacion2?: Date;
  @Column('datetime', { nullable: false })
  DFxPago2?: Date;
  @Column('datetime', { nullable: false })
  DFxHENormal2?: Date;
  @Column('datetime', { nullable: false })
  DFxHENocturna2?: Date;
  @Column('datetime', { nullable: false })
  DFxHEAdicionalNocturna2?: Date;
  @Column('datetime', { nullable: false })
  DFxHEAfavor?: Date;
  @Column('datetime', { nullable: false })
  DFxHEAntesEntrada1?: Date;
  @Column('datetime', { nullable: false })
  DFxHEAntesEntrada2?: Date;

}