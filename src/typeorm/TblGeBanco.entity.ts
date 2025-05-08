import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeBanco')
export class TblGeBanco {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiFormatoBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoServicio?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxExtension?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSeparaArchivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeBanco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
}