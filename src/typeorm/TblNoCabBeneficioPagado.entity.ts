import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabBeneficioPagado')
export class TblNoCabBeneficioPagado {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('int', { nullable: false })
  NidNoConcepto?: any;
  @Column('int', { nullable: false })
  NidNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}