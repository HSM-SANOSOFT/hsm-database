import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetMigraInfoDecimos')
export class TblNoDetMigraInfoDecimos {
  @PrimaryColumn('int', { nullable: false })
  NIdNoInfoDecimo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnExcluir?: string;
  @Column('int', { nullable: false })
  NNuDiasSistema?: number;
  @Column('int', { nullable: false })
  NNuDiasReal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosSistema?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresosReal?: number;

}