import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSecuencia')
export class TblGeSecuencia {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoSecu?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia1?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia2?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia3?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia4?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia5?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuSecuencia?: any;
}