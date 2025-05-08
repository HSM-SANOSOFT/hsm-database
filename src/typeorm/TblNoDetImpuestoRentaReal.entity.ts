import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetImpuestoRentaReal')
export class TblNoDetImpuestoRentaReal {
  @PrimaryColumn('int', { nullable: false })
  NIdNoImptoRenta?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: false })
  NNuPeriodoOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalSueldoOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalSobreSueldoOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIESSOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalBonificacionOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIngresosInd?: any;
  @Column('int', { nullable: false })
  NNuPeriodoAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIESSAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoActual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionActual?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoProyectado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoProyectado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIESSProyectado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionProyectado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEducacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVestimenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVivienda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalud?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyeccion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleBruta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaTerceraEdad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaDiscapacidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRenta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionActualNoProy?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaAsumido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionAcumuladoNoProy?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonifActualNoProyAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActualNoProy?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoAcumuladoNoProy?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActualNoProyAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaRetenidoOtroEmpl?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaRetenido?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaSinAjuste?: any;
}