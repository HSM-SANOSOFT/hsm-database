import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetControlDia')
export class TblCADetControlDia {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato!: number;

  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia!: number;

  @Column('datetime', { nullable: false })
  DFxDia!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtDia!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCeDia!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion!: string;

  @Column('int', { nullable: false })
  NIdCALoteMvto!: number;
}
