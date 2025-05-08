import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionHaberes')
export class TblNoDetLiquidacionHaberes {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtEgresoIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacionAux?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: any;

}