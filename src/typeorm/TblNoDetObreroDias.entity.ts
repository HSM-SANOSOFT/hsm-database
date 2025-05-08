import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetObreroDias')
export class TblNoDetObreroDias {
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
  NnuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column('int', { nullable: false })
  NnuHoras?: any;
  @Column('int', { nullable: false })
  NNuMinutos?: any;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno?: any;
  @Column('datetime', { nullable: false })
  NNuHoraRecargoNocturno2?: any;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr1?: any;
  @Column('datetime', { nullable: false })
  NNuHoraSuplExtr2?: any;

}