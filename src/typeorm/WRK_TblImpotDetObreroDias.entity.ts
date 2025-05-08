import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WRK_TblImpotDetObreroDias')
export class WRK_TblImpotDetObreroDias {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NnuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Identificacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Nombres?: any;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column('int', { nullable: false })
  NnuHoras?: any;
  @Column('int', { nullable: false })
  NnuMinutos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: any;
}