import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoDetNominaIndividual')
export class TblNoDetNominaIndividual {
  @PrimaryColumn('int')
  NidNoNominaContrato!: number;

  @PrimaryColumn('int')
  NNuSecuencia!: number;

  @Column('int')
  NIdNoConcepto!: number;

  @Column('int')
  NIdNoDesglose!: number;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NNuCantidadSistema?: number;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NNuCantidad?: number;

  @Column('numeric', { precision: 18, scale: 4, nullable: true })
  NVtNetoSistema?: number;

  @Column('numeric', { precision: 18, scale: 2, nullable: true })
  NVtNeto?: number;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiArea?: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiCentroCosto?: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiSubCentroCosto?: string;

  @Column('int', { nullable: true })
  NNuAnioProvision?: number;

  @Column('int', { nullable: true })
  NNuMesProvision?: number;

  @Column('int', { nullable: true })
  NIdNoPrestamo?: number;

  @Column('int', { nullable: true })
  NNuCuota?: number;

  @Column({ type: 'varchar', length: 5, nullable: true })
  CCiOrigen?: string;

  @Column('int', { nullable: true })
  NNuSecuenciaNomina?: number;
}
