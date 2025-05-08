import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeReporteCia')
export class TblGeReporteCia {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCodIden?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia1?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia2?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia3?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia4?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia5?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NombreRpt?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Descripcion?: string;
  @Column('int', { nullable: false })
  NNuLineas?: number;
}