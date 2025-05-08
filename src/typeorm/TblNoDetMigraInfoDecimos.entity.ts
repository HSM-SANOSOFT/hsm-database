import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetMigraInfoDecimos')
export class TblNoDetMigraInfoDecimos {
  @PrimaryColumn('int', { nullable: false })
  NIdNoInfoDecimo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluir?: string;
  @Column('int', { nullable: false })
  NNuDiasSistema?: any;
  @Column('int', { nullable: false })
  NNuDiasReal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosSistema?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosReal?: any;

}