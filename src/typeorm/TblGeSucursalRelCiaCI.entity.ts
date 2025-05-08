import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursalRelCiaCI')
export class TblGeSucursalRelCiaCI {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCiaCi?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivisionCi?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursalCi?: string;
}