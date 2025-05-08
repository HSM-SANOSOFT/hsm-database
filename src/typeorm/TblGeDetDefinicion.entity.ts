import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDefinicion')
export class TblGeDetDefinicion {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDefinicion?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsReferencia?: any;
  @Column('int', { nullable: false })
  NVtReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeReferencia?: any;

}