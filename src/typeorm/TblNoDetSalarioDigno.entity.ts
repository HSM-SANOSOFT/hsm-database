import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetSalarioDigno')
export class TblNoDetSalarioDigno {
  @PrimaryColumn('int', { nullable: false })
  NIdNoSalarioDigno?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuDiasContratoSistema?: number;
  @Column('int', { nullable: false })
  NNuDiasContrato?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: string;
  @Column('int', { nullable: false })
  NNuHorasParcial?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuartoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidadesSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionesSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisiones?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBeneficiosSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBeneficios?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyectadoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyectado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDignoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAcreditacion?: string;

}