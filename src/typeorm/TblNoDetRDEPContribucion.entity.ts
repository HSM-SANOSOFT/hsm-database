import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEPContribucion')
export class TblNoDetRDEPContribucion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluirEmpleado?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribEsteEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribEsteEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribOtroEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtExoneracionContribucionSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtExoneracionContribucion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRemuneracionContribSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRemuneracionContrib?: number;
  @Column('int', { nullable: false })
  NNuMesesContribEsteEmplSist?: number;
  @Column('int', { nullable: false })
  NNuMesesContribEsteEmpl?: number;
  @Column('int', { nullable: false })
  NNuMesesContribOtroEmplSist?: number;
  @Column('int', { nullable: false })
  NNuMesesContribOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedioContribSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedioContrib?: number;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaOtroEmplSist?: number;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaOtroEmpl?: number;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaEsteEmplSist?: number;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaEsteEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalContribucionGeneradaSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalContribucionGenerada?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionOtroEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionEsteEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionEsteEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionNoEsteEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionNoEsteEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionPagarSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionPagar?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaOtroEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaOtroEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaEsteEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaEsteEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaEsteEmplSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaEsteEmpl?: number;

}