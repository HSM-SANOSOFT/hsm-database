import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetUbicacion')
export class TblCADetUbicacion {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
}