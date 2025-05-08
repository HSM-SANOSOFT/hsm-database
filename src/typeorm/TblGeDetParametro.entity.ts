import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetParametro')
export class TblGeDetParametro {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiParametro?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTexto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuValor?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: string;
}