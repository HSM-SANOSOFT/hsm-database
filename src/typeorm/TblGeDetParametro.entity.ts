import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetParametro')
export class TblGeDetParametro {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiParametro?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTexto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuValor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
}