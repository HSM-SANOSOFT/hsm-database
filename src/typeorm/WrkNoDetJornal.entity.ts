import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetJornal')
export class WrkNoDetJornal {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column({ type: 'varchar', length: 8 })
  CCiArea!: string;

  @Column({ type: 'varchar', length: 5 })
  CCiLabor!: string;

  @Column({ type: 'varchar', length: 5 })
  CCiTarea!: string;

  @Column({ type: 'varchar', length: 6, nullable: True })
  CCiUnidadMedida?: string;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NNuCantidad?: number;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCtJornal?: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCiError?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  CDsError?: string;
}
