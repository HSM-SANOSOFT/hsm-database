import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSistemaTransfBanco')
export class TblGeDetSistemaTransfBanco {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiFormatoBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsFormatoBanco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeFormatoBanco?: string;
}