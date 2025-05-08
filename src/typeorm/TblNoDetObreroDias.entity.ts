import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetObreroDias')
export class TblNoDetObreroDias {
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
  NnuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxRegistro?: Date;
  @Column('int', { nullable: false })
  NnuHoras?: number;
  @Column('int', { nullable: false })
  NNuMinutos?: number;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno?: Date;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno2?: Date;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr1?: Date;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr2?: Date;

}