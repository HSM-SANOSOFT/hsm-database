import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRelTotalHorasObrero')
export class TblNoRelTotalHorasObrero {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuPeriodo?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasTrabjados?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('int', { nullable: false })
  NNuHorasTrabajadas?: any;
  @Column('int', { nullable: false })
  NNuHorasNoTrabajadas?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasNoLaboradas?: any;
  @Column('int', { nullable: false })
  NNuHorasExtraLV?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraLV?: any;
  @Column('int', { nullable: false })
  NNuHorasExtraSab?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraSab?: any;
  @Column('int', { nullable: false })
  NNuHorasExtraDom?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraDom?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasAsumidos?: any;
  @Column('int', { nullable: false })
  NNuHorasAsumidas?: any;
  @Column('int', { nullable: false })
  NNuMinutosTrabajados?: any;
  @Column('int', { nullable: false })
  NNuMinutosNoTrabajados?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosNoLaborados?: any;
  @Column('int', { nullable: false })
  NNuMinutosAsumidos?: any;
  @Column('int', { nullable: false })
  NNuMinutosExtraLV?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraLV?: any;
  @Column('int', { nullable: false })
  NNuMinutosExtraSab?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraSab?: any;
  @Column('int', { nullable: false })
  NNuMinutosExtraDom?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraDom?: any;
  @Column('int', { nullable: false })
  NNuHorasFeriadoLV?: any;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoLV?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoLV?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoLV?: any;
  @Column('int', { nullable: false })
  NNuHorasFeriadoSab?: any;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoSab?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoSab?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoSab?: any;
  @Column('int', { nullable: false })
  NNuHorasFeriadoDom?: any;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoDom?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoDom?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoDom?: any;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtHoraRecargoNocturno?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasNoTrabajados?: any;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno2?: any;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr1?: any;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraSuplExtr?: any;

}