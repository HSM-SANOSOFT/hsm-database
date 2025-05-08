import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetUtilidad')
export class TblNoDetUtilidad {
  @PrimaryColumn('int', { nullable: false })
  NIdNoUtilidad?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
  @Column('datetime', { nullable: false })
  DFxIniContrato?: any;
  @Column('datetime', { nullable: false })
  DFxFinContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeContrato?: string;
  @Column('int', { nullable: false })
  NNuCargasSistema?: any;
  @Column('int', { nullable: false })
  NNuCargas?: any;
  @Column('int', { nullable: false })
  NNuDiasContratoSistema?: any;
  @Column('int', { nullable: false })
  NNuDiasContrato?: any;
  @Column('int', { nullable: false })
  NNuTotalDiasSistema?: any;
  @Column('int', { nullable: false })
  NNuTotalDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad1Sistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad1?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad2Sistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtPorcUtilidad2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuentosSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDescuentos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoUtilidadSist?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoUtilidad?: any;

}