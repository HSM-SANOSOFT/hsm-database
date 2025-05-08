import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetComision')
export class TblNoDetComision {
  @PrimaryColumn('int', { nullable: false })
  NIdNoComision?: number;
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
  @Column('int', { nullable: false })
  NIdNoConceptoPorc1?: number;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc1?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoPorc2?: number;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc2?: number;
  @Column('int', { nullable: false })
  NIdNoConceptoPorc3?: number;
  @Column('int', { nullable: false })
  NIdNoDesglosePorc3?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComision?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc1?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtComisionPorc3?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;

}