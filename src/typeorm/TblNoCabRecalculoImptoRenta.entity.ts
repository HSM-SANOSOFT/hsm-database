import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabRecalculoImptoRenta')
export class TblNoCabRecalculoImptoRenta {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRecalImptoRenta?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column('int', { nullable: false })
  NNuControl?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('datetime', { nullable: false })
  DFxRecalImptoRenta?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NidNoConcepto?: number;
  @Column('int', { nullable: false })
  NidNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRecalImptoRenta?: string;
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
  CCtProceso?: string;
}