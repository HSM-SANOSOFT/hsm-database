import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('WrkDetCtrlNovedad')
export class WrkDetCtrlNovedad {
  @Column({ type: 'varchar' })
  CCiEstacion?: string;
  @Column('int', { nullable: true })
  NNuSecuencia?: any;
  @Column('int', { nullable: true })
  NIdNoContrato?: any;
  @Column('int', { nullable: true })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: true })
  NIdNoNovedadOrigen?: any;
  @Column('int', { nullable: true })
  NNuSecuenciaOrigen?: any;
  @Column('int', { nullable: true })
  NIdNoConceptoOrigen?: any;
  @Column('int', { nullable: true })
  NIdNoDesgloseOrigen?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuCantidadOrigen?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtConceptoOrigen?: any;
  @Column('int', { nullable: true })
  NidNoNovedadDestino?: any;
}
