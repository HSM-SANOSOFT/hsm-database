import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetControlDia')
export class TblCADetControlDia {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('datetime', { nullable: false })
  DFxDia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtDia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NIdCALoteMvto?: any;

}