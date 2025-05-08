import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContSolidaria')
export class TblNoDetContSolidaria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContSolidaria?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnPrimerRegistro?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseAbril?: any;
  @Column('int', { nullable: false })
  NNuAcumAporteMes?: any;
  @Column('int', { nullable: false })
  NNuAcumMesesPromedio?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumContribRetenida?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumRemuneracion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionActual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedio?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseCalculoEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseCalculoEmpleador?: any;
  @Column('int', { nullable: false })
  NNuMesesAportBaseRemunProm?: any;
  @Column('int', { nullable: false })
  NNuAporteMesActual?: any;
  @Column('int', { nullable: false })
  NNuCuotasContribuir?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaMontoAporte?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaAjusteMontoAporte?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConciliaMontoConstribucion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionEfectuada?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionCredTributarioAcum?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDonacionCredTribActual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribRetenerEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribRetenerEmpleador?: any;

}