import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetUtilidad')
export class WrkNoDetUtilidad {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column({ type: 'varchar', length: 13 })
  CCiDocumento!: string;

  @Column('int', { nullable: true })
  NNuCargas?: number;

  @Column('int', { nullable: true })
  NNuDiasContrato?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtUtilidad1?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtUtilidad2?: number;

  @Column('numeric', { precision: 18, scale: 6, nullable: true })
  NVtDescuentos?: number;

  @Column({ type: 'varchar', length: 3, nullable: true })
  CCiError?: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  CDsError?: string;
}
