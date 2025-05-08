import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeArchivo')
export class TblGeArchivo {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOpcion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtArchivo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia1?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia2?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia3?: any;
  @Column('int', { nullable: false })
  NNuReferencia1?: any;
  @Column('int', { nullable: false })
  NNuReferencia2?: any;
  @Column('int', { nullable: false })
  NNuReferencia3?: any;
  @Column('int', { nullable: false })
  NNuPosicion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSubRutaArchivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombreArchivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsExtensionArchivo?: any;
  @Column('int', { nullable: false })
  NNuArchivo?: any;
}