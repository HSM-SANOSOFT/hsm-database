import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSecuencia')
export class TblGeSecuencia {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoSecu?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia1?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia2?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia3?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia4?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia5?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuSecuencia?: number;
}