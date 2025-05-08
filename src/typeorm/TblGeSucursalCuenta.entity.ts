import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursalCuenta')
export class TblGeSucursalCuenta {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCtaCte?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia2?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoMvto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSucursalCuenta?: string;

}