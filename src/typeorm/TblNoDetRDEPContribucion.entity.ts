import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetRDEPContribucion')
export class TblNoDetRDEPContribucion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoRDEP?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluirEmpleado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribEsteEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribEsteEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribOtroEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionContribOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtExoneracionContribucionSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtExoneracionContribucion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRemuneracionContribSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalRemuneracionContrib?: any;
  @Column('int', { nullable: false })
  NNuMesesContribEsteEmplSist?: any;
  @Column('int', { nullable: false })
  NNuMesesContribEsteEmpl?: any;
  @Column('int', { nullable: false })
  NNuMesesContribOtroEmplSist?: any;
  @Column('int', { nullable: false })
  NNuMesesContribOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedioContribSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRemuneracionPromedioContrib?: any;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaOtroEmplSist?: any;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaOtroEmpl?: any;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaEsteEmplSist?: any;
  @Column('int', { nullable: false })
  NNuMesesContribGeneradaEsteEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalContribucionGeneradaSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalContribucionGenerada?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionOtroEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionEsteEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionEsteEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionNoEsteEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCreditoTribDonacionNoEsteEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionPagarSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionPagar?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaOtroEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaOtroEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaEsteEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionAsumidaEsteEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaEsteEmplSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtContribucionRetenidaEsteEmpl?: any;

}