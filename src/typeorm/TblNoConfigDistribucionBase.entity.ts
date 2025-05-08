import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoConfigDistribucionBase')
export class TblNoConfigDistribucionBase {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConfigDistribucion?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;

}