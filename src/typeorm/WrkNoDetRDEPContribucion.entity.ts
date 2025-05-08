import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('WrkNoDetRDEPContribucion')
export class WrkNoDetRDEPContribucion {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  CCiEstacion!: string;

  @PrimaryColumn('int')
  NNuRegistro!: number;

  @PrimaryColumn({ type: 'varchar', length: 50 })
  CCiDocumento!: string;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRemuneracionContribEsteEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRemuneracionContribOtroEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtExoneracionContribucionSist?: number;

  @Column('int', { nullable: true })
  NNuMesesContribEsteEmplSist?: number;

  @Column('int', { nullable: true })
  NNuMesesContribOtroEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtRemuneracionPromedioContribSist?: number;

  @Column('int', { nullable: true })
  NNuMesesContribGeneradaOtroEmplSist?: number;

  @Column('int', { nullable: true })
  NNuMesesContribGeneradaEsteEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtTotalContribucionGeneradaSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtCreditoTribDonacionOtroEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtCreditoTribDonacionEsteEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtCreditoTribDonacionNoEsteEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtContribucionAsumidaOtroEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtContribucionRetenidaOtroEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtContribucionAsumidaEsteEmplSist?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtContribucionRetenidaEsteEmplSist?: number;

  @Column({ type: 'varchar', length: 8000, nullable: true })
  CDsError?: string;
}
