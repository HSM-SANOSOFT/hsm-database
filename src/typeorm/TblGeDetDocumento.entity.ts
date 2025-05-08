import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDocumento')
export class TblGeDetDocumento {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
}