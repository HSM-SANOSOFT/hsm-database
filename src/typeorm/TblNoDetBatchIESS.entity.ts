import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetBatchIESS')
export class TblNoDetBatchIESS {
  @PrimaryColumn('int', { nullable: false })
  NidNoBatchIESS?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxFalta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAntSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAnt?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNetoSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('int', { nullable: false })
  NNuDiasSistema?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: any;

}