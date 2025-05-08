import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeLogProceso')
export class TblGeLogProceso {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacion?: any;
  @Column('int', { nullable: false })
  NNuTotalProceso?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaProceso?: any;
}