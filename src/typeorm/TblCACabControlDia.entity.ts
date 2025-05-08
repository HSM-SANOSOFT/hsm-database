import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabControlDia')
export class TblCACabControlDia {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;
}
