import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabSalarioDigno')
export class TblNoCabSalarioDigno {
  @Column('int', { nullable: false })
  NIdNoSalarioDigno?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('datetime', { nullable: false })
  DFxSalarioDigno?: Date;
  @Column('int', { nullable: false })
  NNuAnioCalculo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoNomina?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSalarioDigno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasProvision?: string;
}