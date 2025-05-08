import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabOrdenPago')
export class TblNoCabOrdenPago {
  @PrimaryColumn('int', { nullable: false })
  NIdNoOrdenPago?: number;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column('datetime', { nullable: false })
  DFxOrdenPago?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtOrdenPago?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnOrdenAgrupada?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBeneficiario?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtOrdenPago?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeOrdenPago?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
}