import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabUtilidad')
export class TblNoCabUtilidad {
  @Column('int', { nullable: false })
  NIdNoUtilidad?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('datetime', { nullable: false })
  DFxUtilidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NIdNoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeUtilidad?: any;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculoImportacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtFormaPago?: any;
}