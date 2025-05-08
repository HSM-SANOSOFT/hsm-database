import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetalle')
export class TblGeDetalle {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDetalle?: any;
}