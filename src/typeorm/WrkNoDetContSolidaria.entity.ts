import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetContSolidaria')
export class WrkNoDetContSolidaria {
  @Column({ type: 'varchar', length: 50, nullable: true })
  CCiEstacion?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  CCiTipoParam?: string;

  @PrimaryColumn('int')
  NNuSecuencia!: number;

  @PrimaryColumn('int')
  NIdNoEmpleado!: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtBaseAbril?: number;

  @Column('int', { nullable: true })
  NNuAcumAporteMes?: number;

  @Column('int', { nullable: true })
  NNuAcumMesesPromedio?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtAcumContribRetenida?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtAcumRemuneracion?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtDonacionEfectuada?: number;
}
