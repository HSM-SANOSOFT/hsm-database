import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTablaContSolidaria')
export class TblNoDetTablaContSolidaria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTablaContSolidaria?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorDesde?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorHasta?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: number;
  @Column('int', { nullable: false })
  NNuMesesContribucion?: number;

}