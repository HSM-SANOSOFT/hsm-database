import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetEmpleadoDocumentoReq')
export class TblNoDetEmpleadoDocumentoReq {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
}