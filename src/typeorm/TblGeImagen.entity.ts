import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeImagen')
export class TblGeImagen {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdGeReferencia?: any;
  @Column('text', { nullable: false })
  ImgFoto?: any;
}