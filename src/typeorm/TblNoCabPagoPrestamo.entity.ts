import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabPagoPrestamo')
export class TblNoCabPagoPrestamo {
  @PrimaryColumn('int', { nullable: false })
  NNuPagoPrestamo?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoPrestamo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtMontoCancelar?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePagoPrestamo?: string;
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