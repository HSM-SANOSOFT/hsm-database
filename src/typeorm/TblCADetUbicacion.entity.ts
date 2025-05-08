import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetUbicacion')
export class TblCADetUbicacion {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiUbicacion?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
}