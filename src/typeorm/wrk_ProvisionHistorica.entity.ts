import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrk_ProvisionHistorica')
export class wrk_ProvisionHistorica {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoEmpleadoImporta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoEmpleadoSistema?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuMes?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3Importa?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3Sistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4Importa?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4Sistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesImporta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesSistema?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBasico?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtNivelError?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtError?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnOtroEmpleadorImporta?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnOtroEmpleadorSistema?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigen?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD3?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD4?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeVacaciones?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsExisteObra?: string;
}