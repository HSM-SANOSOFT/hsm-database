import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('wrk_ProvisionHistorica')
export class wrk_ProvisionHistorica {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoEmpleadoImporta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoEmpleadoSistema?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
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
  CCtNivelError?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtError?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsError?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnOtroEmpleadorImporta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnOtroEmpleadorSistema?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigen?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD3?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD4?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeVacaciones?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsExisteObra?: any;
}