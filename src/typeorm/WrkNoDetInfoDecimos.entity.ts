import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetInfoDecimos')
export class WrkNoDetInfoDecimos {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column('numeric', { precision: 18, scale: 2, nullable: true })
  NNuDiasReal?: number;

  @Column('numeric', { precision: 18, scale: 2, nullable: true })
  NVtIngresosReal?: number;

  @Column({ type: 'varchar', length: 3 })
  CCiError!: string;

  @Column({ type: 'varchar', length: 255 })
  CDsError!: string;
}
