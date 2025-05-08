import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetValoresAvance')
export class TblNoDetValoresAvance {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAvance?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalAvance?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtPagoNomina?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDiferenciaAvance?: any;
}