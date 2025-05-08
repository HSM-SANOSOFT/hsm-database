import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabDistribuye')
export class TblNoCabDistribuye {
  @PrimaryColumn('int', { nullable: false })
  NidNoDistribuye?: any;
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
  @Column('int', { nullable: false })
  NidNoNomina?: any;
  @Column('int', { nullable: false })
  NNuControl?: any;
  @Column('datetime', { nullable: false })
  DFxDistribuye?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDistribuye?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaCtble?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionCtble?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalCtble?: any;
  @Column('int', { nullable: false })
  NNuAnioCtble?: any;
  @Column('int', { nullable: false })
  NNuPeriodoCtble?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: any;
  @Column('int', { nullable: false })
  NNuComprobante?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContabilizacion?: any;
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
}