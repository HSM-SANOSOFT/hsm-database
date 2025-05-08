import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetLoteMvto')
export class TblCADetLoteMvto {
  @PrimaryColumn('int', { nullable: false })
  NIdCALoteMvto?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLabor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasLabor?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasPago?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo25?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo25?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo50?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo50?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasRecargo100?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasRecargo100?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasAtraso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsHorasAtraso?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENormal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENocturna?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAdicionalNocturna?: any;
  @Column('int', { nullable: false })
  NIdCATurno?: any;
  @Column('int', { nullable: false })
  NNuExtraFeriadoFinSemana?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLabor2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPago2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasAtraso2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENormal2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHENocturna2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAdicionalNocturna2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAFavor?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAntesEntrada1?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHEAntesEntrada2?: any;

}