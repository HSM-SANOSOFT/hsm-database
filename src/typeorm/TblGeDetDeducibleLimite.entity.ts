import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetDeducibleLimite')
export class TblGeDetDeducibleLimite {
  @PrimaryColumn('int', { nullable: false })
  NIdGeDeducible?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoGasto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnFraccion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDedudible?: number;
}