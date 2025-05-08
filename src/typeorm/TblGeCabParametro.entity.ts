import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabParametro')
export class TblGeCabParametro {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParametro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsParametro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTexto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuValor?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDetalle?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsValoresPosibles?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
}