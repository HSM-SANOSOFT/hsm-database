import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursal')
export class TblGeSucursal {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFax?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEmail?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnMatriz?: any;
  @Column('text', { nullable: false })
  ImgSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSucursal?: any;
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
  CDsReferencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDecimoTipoNomina?: any;
}