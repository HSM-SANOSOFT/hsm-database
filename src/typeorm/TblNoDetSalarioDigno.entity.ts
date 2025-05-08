import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetSalarioDigno')
export class TblNoDetSalarioDigno {
  @PrimaryColumn('int', { nullable: false })
  NIdNoSalarioDigno?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuDiasContratoSistema?: any;
  @Column('int', { nullable: false })
  NNuDiasContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: any;
  @Column('int', { nullable: false })
  NNuHorasParcial?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTerceroSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoTercero?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuartoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimoCuarto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReservaSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtFondoReserva?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidadesSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidades?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionesSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisiones?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBeneficiosSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBeneficios?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyectadoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyectado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDignoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioDigno?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAcreditacion?: any;

}