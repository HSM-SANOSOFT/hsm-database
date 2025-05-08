import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursalCuenta')
export class TblGeSucursalCuenta {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCtaCte?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtCuenta?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
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