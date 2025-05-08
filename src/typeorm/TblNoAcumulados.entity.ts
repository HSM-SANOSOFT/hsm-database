import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAcumulados')
export class TblNoAcumulados {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('datetime', { nullable: false })
  DFxAcumuladoIni?: any;
  @Column('datetime', { nullable: false })
  DFxAcumuladoFin?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAcumulado?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumulado?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAbonado?: any;
  @Column('datetime', { nullable: false })
  DFxPago?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePago?: string;
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