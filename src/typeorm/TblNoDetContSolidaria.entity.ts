import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContSolidaria')
export class TblNoDetContSolidaria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContSolidaria?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('datetime', { nullable: false })
  DFxVigencia?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnPrimerRegistro?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseAbril?: number;
  @Column('int', { nullable: false })
  NNuAcumAporteMes?: number;
  @Column('int', { nullable: false })
  NNuAcumMesesPromedio?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumContribRetenida?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumRemuneracion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionActual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedio?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseCalculoEmpleado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseCalculoEmpleador?: number;
  @Column('int', { nullable: false })
  NNuMesesAportBaseRemunProm?: number;
  @Column('int', { nullable: false })
  NNuAporteMesActual?: number;
  @Column('int', { nullable: false })
  NNuCuotasContribuir?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaMontoAporte?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaAjusteMontoAporte?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaMontoConstribucion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionEfectuada?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionCredTributarioAcum?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionCredTribActual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribRetenerEmpleado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribRetenerEmpleador?: number;

}