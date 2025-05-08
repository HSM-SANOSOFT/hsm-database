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
  CCiTipoInsumo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiInsumo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: any;

}