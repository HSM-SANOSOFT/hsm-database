import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDistribuyeEmpleado')
export class TblNoDetDistribuyeEmpleado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoDistribuye?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuenciaEmpl?: number;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCtDistribucion?: string;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdPrPresupuesto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
}