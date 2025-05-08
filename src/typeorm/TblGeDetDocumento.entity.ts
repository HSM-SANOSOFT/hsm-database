import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDocumento')
export class TblGeDetDocumento {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
}