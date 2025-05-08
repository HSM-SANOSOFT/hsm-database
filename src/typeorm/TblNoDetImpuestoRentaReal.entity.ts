import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetImpuestoRentaReal')
export class TblNoDetImpuestoRentaReal {
  @PrimaryColumn('int', { nullable: false })
  NIdNoImptoRenta?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: false })
  NNuPeriodoOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalSueldoOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalSobreSueldoOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIESSOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalBonificacionOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalIngresosInd?: number;
  @Column('int', { nullable: false })
  NNuPeriodoAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIESSAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoActual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionActual?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoProyectado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoProyectado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIESSProyectado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionProyectado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAlimentacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtEducacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVestimenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVivienda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalud?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtProyeccion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBaseImponibleBruta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaTerceraEdad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtRebajaDiscapacidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRenta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionActualNoProy?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaAsumido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonificacionAcumuladoNoProy?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtBonifActualNoProyAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActualNoProy?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoAcumuladoNoProy?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSobreSueldoActualNoProyAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtUtilidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaRetenidoOtroEmpl?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaRetenido?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtImptoRentaSinAjuste?: number;
}