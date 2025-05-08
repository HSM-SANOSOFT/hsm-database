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
  CCePagoPrestamo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}