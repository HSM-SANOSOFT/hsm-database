import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetUtilidad')
export class TblNoDetUtilidad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoUtilidad?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
  @Column('datetime', { nullable: false })
  DFxIniContrato?: Date;
  @Column('datetime', { nullable: false })
  DFxFinContrato?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeContrato?: string;
  @Column('int', { nullable: false })
  NNuCargasSistema?: number;
  @Column('int', { nullable: false })
  NNuCargas?: number;
  @Column('int', { nullable: false })
  NNuDiasContratoSistema?: number;
  @Column('int', { nullable: false })
  NNuDiasContrato?: number;
  @Column('int', { nullable: false })
  NNuTotalDiasSistema?: number;
  @Column('int', { nullable: false })
  NNuTotalDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad1Sistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad1?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad2Sistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad2?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuentosSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuentos?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoUtilidadSist?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoUtilidad?: number;

}