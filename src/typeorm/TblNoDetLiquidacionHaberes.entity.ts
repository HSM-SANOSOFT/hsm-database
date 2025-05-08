import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLiquidacionHaberes')
export class TblNoDetLiquidacionHaberes {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLiqHaberes?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDetalle?: string;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtEgresoIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetObservacionAux?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: string;

}