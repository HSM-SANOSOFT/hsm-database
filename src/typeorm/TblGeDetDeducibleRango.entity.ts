import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDeducibleRango')
export class TblGeDetDeducibleRango {
  @PrimaryColumn('int', { nullable: false })
  NIdGeDeducible?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRefrenecia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseMinima?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseMaxima?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFraccion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnExcedente?: any;
}