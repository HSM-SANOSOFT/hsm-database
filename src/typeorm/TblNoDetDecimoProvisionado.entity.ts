import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDecimoProvisionado')
export class TblNoDetDecimoProvisionado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDecimoProvision?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoEdicion?: number;
  @Column('int', { nullable: false })
  NNuMeses?: number;
}