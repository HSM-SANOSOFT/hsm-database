import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkDetCtrlNovedad')
export class WrkDetCtrlNovedad {
  @Column({ type: 'varchar' })
  CCiEstacion?: string;
  @Column('int', { nullable: true })
  NNuSecuencia?: number;
  @Column('int', { nullable: true })
  NIdNoContrato?: number;
  @Column('int', { nullable: true })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: true })
  NIdNoNovedadOrigen?: number;
  @Column('int', { nullable: true })
  NNuSecuenciaOrigen?: number;
  @Column('int', { nullable: true })
  NIdNoConceptoOrigen?: number;
  @Column('int', { nullable: true })
  NIdNoDesgloseOrigen?: number;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuCantidadOrigen?: number;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtConceptoOrigen?: number;
  @Column('int', { nullable: true })
  NidNoNovedadDestino?: number;
}