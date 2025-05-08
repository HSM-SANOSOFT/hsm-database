import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoSueldoBasico')
export class TblNoSueldoBasico {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuMesDesde?: number;
  @Column('int', { nullable: false })
  NNuMesHasta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBasico?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: number;

}