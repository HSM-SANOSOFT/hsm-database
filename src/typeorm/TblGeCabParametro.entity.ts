import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabParametro')
export class TblGeCabParametro {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParametro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsParametro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTexto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuValor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDetalle?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsValoresPosibles?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}