import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabValoresAvance')
export class TblNoCabValoresAvance {
  @Column('int', { nullable: false })
  NIdNoAvance?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
  @Column('int', { nullable: false })
  NIdNoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAvance?: any;
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