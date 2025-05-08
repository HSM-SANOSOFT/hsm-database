import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeLogProceso')
export class TblGeLogProceso {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacion?: string;
  @Column('int', { nullable: false })
  NNuTotalProceso?: number;
  @Column('int', { nullable: false })
  NNuSecuenciaProceso?: number;
}