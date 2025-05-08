import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabConceptoTarifario')
export class TblNoCabConceptoTarifario {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConceptoTarifario?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeConceptoTarifario?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoDist?: any;
  @Column('int', { nullable: false })
  NIdNoDesgloseDist?: any;
}