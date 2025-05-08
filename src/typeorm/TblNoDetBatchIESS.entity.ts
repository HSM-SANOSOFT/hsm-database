import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetBatchIESS')
export class TblNoDetBatchIESS {
  @PrimaryColumn('int', { nullable: false })
  NidNoBatchIESS?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxFalta?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAntSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAnt?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('int', { nullable: false })
  NNuDiasSistema?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: string;

}