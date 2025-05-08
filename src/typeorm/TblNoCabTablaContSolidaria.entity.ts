import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabTablaContSolidaria')
export class TblNoCabTablaContSolidaria {
  @Column('int', { nullable: false })
  NIdNoTablaContSolidaria?: number;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('datetime', { nullable: false })
  DFxContSolidaria?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTablaContSolidaria?: string;
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