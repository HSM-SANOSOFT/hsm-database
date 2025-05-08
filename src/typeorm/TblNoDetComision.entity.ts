import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetComision')
export class TblNoDetComision {
  @PrimaryColumn('int', { nullable: false })
  NIdNoComision?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NIdNoConceptoPorc1?: any;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc1?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoPorc2?: any;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc2?: any;
  @Column('int', { nullable: false })
  NIdNoConceptoPorc3?: any;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc3?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComision?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc1?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc3?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;

}