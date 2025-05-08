import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WRK_TblImpotDetProyectoDias')
export class WRK_TblImpotDetProyectoDias {
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NnuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdentificacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: any;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: any;
}