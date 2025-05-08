import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeTipoServicioTransfBanco')
export class TblGeTipoServicioTransfBanco {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoServicio?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoServicio?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoServicio?: string;

}