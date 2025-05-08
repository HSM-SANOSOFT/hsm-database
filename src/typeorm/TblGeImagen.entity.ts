import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeImagen')
export class TblGeImagen {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: string;
  @PrimaryColumn('int', { nullable: false })
  NIdGeReferencia?: number;
  @Column('text', { nullable: false })
  ImgFoto?: string;
}