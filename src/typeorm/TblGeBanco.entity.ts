import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeBanco')
export class TblGeBanco {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSistemaBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiFormatoBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoServicio?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxExtension?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSeparaArchivo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}