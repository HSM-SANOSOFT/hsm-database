import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDBName')
export class TblGeDBName {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiAplicacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDBName?: string;
}