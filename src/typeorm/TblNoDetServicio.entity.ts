import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetServicio')
export class TblNoDetServicio {
  @PrimaryColumn('int', { nullable: false })
  NIdNoServicio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NNuHoras?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtValorPago?: any;

}