import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetTablaContSolidaria')
export class TblNoDetTablaContSolidaria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTablaContSolidaria?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorDesde?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorHasta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTarifa?: any;
  @Column('int', { nullable: false })
  NNuMesesContribucion?: any;

}