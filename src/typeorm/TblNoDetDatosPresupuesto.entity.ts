import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDatosPresupuesto')
export class TblNoDetDatosPresupuesto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdPrPresupuesto?: any;
  @Column('int', { nullable: false })
  NNuPresupuesto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoInsumo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiInsumo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: any;

}