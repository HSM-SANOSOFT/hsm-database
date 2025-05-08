import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabDistribuye')
export class TblNoCabDistribuye {
  @PrimaryColumn('int', { nullable: false })
  NidNoDistribuye?: number;
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
  @Column('int', { nullable: false })
  NidNoNomina?: number;
  @Column('int', { nullable: false })
  NNuControl?: number;
  @Column('datetime', { nullable: false })
  DFxDistribuye?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDistribuye?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionCtble?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalCtble?: string;
  @Column('int', { nullable: false })
  NNuAnioCtble?: number;
  @Column('int', { nullable: false })
  NNuPeriodoCtble?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuComprobante?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContabilizacion?: string;
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
}