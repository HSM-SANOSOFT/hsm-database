import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetTablaVirtual')
export class TblGeDetTablaVirtual {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCampoVirtual?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCampoVirtual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDato?: string;
  @Column('int', { nullable: false })
  NNuLongitud?: any;
  @Column('int', { nullable: false })
  NNuDecimales?: any;
}