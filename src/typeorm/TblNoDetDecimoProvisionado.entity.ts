import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDecimoProvisionado')
export class TblNoDetDecimoProvisionado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDecimoProvision?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConceptoEdicion?: any;
  @Column('int', { nullable: false })
  NNuMeses?: any;
}