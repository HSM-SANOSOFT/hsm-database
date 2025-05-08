import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSistemaTransfBanco')
export class TblGeDetSistemaTransfBanco {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiFormatoBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsFormatoBanco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeFormatoBanco?: string;
}