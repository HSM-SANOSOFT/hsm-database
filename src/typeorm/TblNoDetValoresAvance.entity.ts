import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetValoresAvance')
export class TblNoDetValoresAvance {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAvance?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalAvance?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtPagoNomina?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDiferenciaAvance?: number;
}