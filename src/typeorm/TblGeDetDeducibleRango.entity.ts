import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDeducibleRango')
export class TblGeDetDeducibleRango {
  @PrimaryColumn('int', { nullable: false })
  NIdGeDeducible?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRefrenecia?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseMinima?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseMaxima?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFraccion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnExcedente?: number;
}