import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WRK_TblImpotDetProyectoDias')
export class WRK_TblImpotDetProyectoDias {
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NnuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdentificacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: string;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: string;
}