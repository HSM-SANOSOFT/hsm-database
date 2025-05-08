import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoPlanDeCuenta')
export class TblNoPlanDeCuenta {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsPlanCuenta?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel1?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxSeparador?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel2?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel3?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel4?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel5?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel6?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel7?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel8?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivel9?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePlanCtas?: string;
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