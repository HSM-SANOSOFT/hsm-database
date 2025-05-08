import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetNovedad')
export class WrkNoDetNovedad {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NVtNovedad?: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  CTxObservacion?: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCiError?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  CDsError?: string;

  @Column('datetime', { nullable: true })
  DFxDia?: Date;

  @Column('int', { nullable: true })
  NNuPeriodo?: number;
}
