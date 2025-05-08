import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAcumulados')
export class TblNoAcumulados {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('datetime', { nullable: false })
  DFxAcumuladoIni?: Date;
  @Column('datetime', { nullable: false })
  DFxAcumuladoFin?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAcumulado?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAcumulado?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtAbonado?: number;
  @Column('datetime', { nullable: false })
  DFxPago?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePago?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
}