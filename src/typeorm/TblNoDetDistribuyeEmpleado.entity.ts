import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyeEmpleado')
export class TblNoDetDistribuyeEmpleado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaEmpl?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdPrPresupuesto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
}