import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetLoteMvto')
export class TblCADetLoteMvto {
  @PrimaryColumn('int', { nullable: false })
  NIdCALoteMvto?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLabor?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasLabor?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPago?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasPago?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo25?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo25?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo50?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo50?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo100?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo100?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasAtraso?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasAtraso?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasFalta?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENormal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENocturna?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAdicionalNocturna?: number;
  @Column('int', { nullable: false })
  NIdCATurno?: number;
  @Column('int', { nullable: false })
  NNuExtraFeriadoFinSemana?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLabor2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPago2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasAtraso2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENormal2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENocturna2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAdicionalNocturna2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAFavor?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAntesEntrada1?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAntesEntrada2?: number;

}