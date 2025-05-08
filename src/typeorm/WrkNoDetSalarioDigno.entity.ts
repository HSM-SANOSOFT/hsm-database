import { Entity, Column } from 'typeorm';

@Entity('WrkNoDetSalarioDigno')
export class WrkNoDetSalarioDigno {
  @Column({ type: 'varchar', length: 50, nullable: true })
  CCiEstacion?: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  CCiDocumento?: string;

  @Column('int', { nullable: true })
  NNuDiasContrato?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtSueldo?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtDecimoTercero?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtDecimoCuarto?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtFondoReserva?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtUtilidades?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtComisiones?: number;
  @Column('numeric', { precision: 12, scale: 2, nullable: true })
  NVtBeneficios?: number;
}
