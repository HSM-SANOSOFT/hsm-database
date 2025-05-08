import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetRecalculoImptoRenta')
export class WrkNoDetRecalculoImptoRenta {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @Column('int', { nullable: true })
  NIdNoEmpleado?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealAlimentacion?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealEducacion?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealVestimenta?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealVivienda?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealSalud?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRealProyeccion?: number;
}
