import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetServicio')
export class TblNoDetServicio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoServicio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NNuHoras?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorPago?: number;

}