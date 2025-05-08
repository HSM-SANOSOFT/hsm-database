import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoDetOrdenPagoObrero')
export class TblNoDetOrdenPagoObrero {
  @PrimaryColumn('int')
  NIdNoOrdenPago!: number;

  @PrimaryColumn('int')
  NIdNoJefeInmediato!: number;

  @Column({ type: 'char', length: 1, nullable: true })
  CCtGeneracion?: string;
}
