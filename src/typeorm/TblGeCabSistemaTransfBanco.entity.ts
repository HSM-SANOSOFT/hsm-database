import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabSistemaTransfBanco')
export class TblGeCabSistemaTransfBanco {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSistemaBanco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSistemaBanco?: string;
}