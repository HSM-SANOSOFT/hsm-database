import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabOrdenPago')
export class TblNoCabOrdenPago {
  @PrimaryColumn('int', { nullable: false })
  NIdNoOrdenPago?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column('datetime', { nullable: false })
  DFxOrdenPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrdenPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnOrdenAgrupada?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBeneficiario?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtOrdenPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeOrdenPago?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
}