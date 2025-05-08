import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabRDEP')
export class TblNoCabRDEP {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('datetime', { nullable: false })
  DFxRDEP?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRUCContador?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRazonSocial?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccionCia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefonoCia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRDEP?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtTraerDatos?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDC13Provision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDC14Provision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnVacacionProvision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarLiquidados?: string;
}