import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabValidacion')
export class TblCACabValidacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAValidacion!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal!: string;

  @Column('int', { nullable: false })
  NNuValidacion!: number;

  @Column('datetime', { nullable: false })
  DFxIniValidacion!: Date;

  @Column('datetime', { nullable: false })
  DFxFinValidacion!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeValidacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;
}
