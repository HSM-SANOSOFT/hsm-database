import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRelTotalHorasObrero')
export class TblNoRelTotalHorasObrero {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @PrimaryColumn('int', { nullable: false })
  NIdNoJefeInmediato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuPeriodo?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasTrabjados?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('int', { nullable: false })
  NNuHorasTrabajadas?: number;
  @Column('int', { nullable: false })
  NNuHorasNoTrabajadas?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasNoLaboradas?: number;
  @Column('int', { nullable: false })
  NNuHorasExtraLV?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraLV?: number;
  @Column('int', { nullable: false })
  NNuHorasExtraSab?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraSab?: number;
  @Column('int', { nullable: false })
  NNuHorasExtraDom?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasExtraDom?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasAsumidos?: number;
  @Column('int', { nullable: false })
  NNuHorasAsumidas?: number;
  @Column('int', { nullable: false })
  NNuMinutosTrabajados?: number;
  @Column('int', { nullable: false })
  NNuMinutosNoTrabajados?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosNoLaborados?: number;
  @Column('int', { nullable: false })
  NNuMinutosAsumidos?: number;
  @Column('int', { nullable: false })
  NNuMinutosExtraLV?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraLV?: number;
  @Column('int', { nullable: false })
  NNuMinutosExtraSab?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraSab?: number;
  @Column('int', { nullable: false })
  NNuMinutosExtraDom?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosExtraDom?: number;
  @Column('int', { nullable: false })
  NNuHorasFeriadoLV?: number;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoLV?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoLV?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoLV?: number;
  @Column('int', { nullable: false })
  NNuHorasFeriadoSab?: number;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoSab?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoSab?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoSab?: number;
  @Column('int', { nullable: false })
  NNuHorasFeriadoDom?: number;
  @Column('int', { nullable: false })
  NNuMinutosFeriadoDom?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasFeriadoDom?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMinutosFeriadoDom?: number;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtHoraRecargoNocturno?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasNoTrabajados?: number;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno2?: Date;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr1?: Date;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr2?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraSuplExtr?: number;

}