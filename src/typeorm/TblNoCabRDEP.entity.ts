import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabRDEP')
export class TblNoCabRDEP {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('datetime', { nullable: false })
  DFxRDEP?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRUCContador?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRazonSocial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccionCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefonoCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRDEP?: any;
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
  CCtTraerDatos?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDC13Provision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDC14Provision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnVacacionProvision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMostrarLiquidados?: any;
}