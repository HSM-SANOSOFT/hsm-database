import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursalRelCiaCI')
export class TblGeSucursalRelCiaCI {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCiaCi?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivisionCi?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursalCi?: any;
}