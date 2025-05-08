import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeArchivo')
export class TblGeArchivo {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOpcion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtArchivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia1?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia2?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia3?: string;
  @Column('int', { nullable: false })
  NNuReferencia1?: number;
  @Column('int', { nullable: false })
  NNuReferencia2?: number;
  @Column('int', { nullable: false })
  NNuReferencia3?: number;
  @Column('int', { nullable: false })
  NNuPosicion?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSubRutaArchivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombreArchivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsExtensionArchivo?: string;
  @Column('int', { nullable: false })
  NNuArchivo?: number;
}