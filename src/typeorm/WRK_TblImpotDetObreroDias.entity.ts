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
  NIdNoJefeInmediato?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NnuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Identificacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Nombres?: string;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column('int', { nullable: false })
  NnuHoras?: any;
  @Column('int', { nullable: false })
  NnuMinutos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: string;
}