import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabTablaContSolidaria')
export class TblNoCabTablaContSolidaria {
  @Column('int', { nullable: false })
  NIdNoTablaContSolidaria?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('datetime', { nullable: false })
  DFxContSolidaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTablaContSolidaria?: any;
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