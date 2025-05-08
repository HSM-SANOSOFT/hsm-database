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
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuMes?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3Importa?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3Sistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4Importa?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4Sistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesImporta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacacionesSistema?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBasico?: any;
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