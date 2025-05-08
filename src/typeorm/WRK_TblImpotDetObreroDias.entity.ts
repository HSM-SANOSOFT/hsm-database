import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WRK_TblImpotDetObreroDias')
export class WRK_TblImpotDetObreroDias {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: number;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('int', { nullable: false })
  NnuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Identificacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Nombres?: string;
  @Column('datetime', { nullable: false })
  DFxRegistro?: Date;
  @Column('int', { nullable: false })
  NnuHoras?: number;
  @Column('int', { nullable: false })
  NnuMinutos?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: string;
}