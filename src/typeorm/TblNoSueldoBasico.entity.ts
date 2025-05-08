import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoSueldoBasico')
export class TblNoSueldoBasico {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuMesDesde?: any;
  @Column('int', { nullable: false })
  NNuMesHasta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBasico?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAporteIESS?: any;

}