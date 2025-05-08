import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetTablaVirtual')
export class TblGeDetTablaVirtual {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCampoVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCampoVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDato?: string;
  @Column('int', { nullable: false })
  NNuLongitud?: number;
  @Column('int', { nullable: false })
  NNuDecimales?: number;
}