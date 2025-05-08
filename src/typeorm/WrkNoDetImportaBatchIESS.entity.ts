import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetImportaBatchIESS')
export class WrkNoDetImportaBatchIESS {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiArea?: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCiMotivo?: string;

  @Column('datetime', { nullable: true })
  DFxFalta?: Date;

  @Column('int', { nullable: true })
  NNuDiaFalta?: number;

  @Column('int', { nullable: true })
  NNuDiaLaborados?: number;

  @Column('int', { nullable: true })
  NVtSueldo?: number;

  @Column({ type: 'char', length: 1, nullable: true })
  CSnTipoObrero?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  CCtNivelError?: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCiError?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  CDsError?: string;
}
