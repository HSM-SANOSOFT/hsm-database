import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDefinicion')
export class TblGeDetDefinicion {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDefinicion?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsReferencia?: string;
  @Column('int', { nullable: false })
  NVtReferencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeReferencia?: string;

}