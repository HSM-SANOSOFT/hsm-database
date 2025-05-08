import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeReporteCia')
export class TblGeReporteCia {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCodIden?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia1?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia2?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia3?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia4?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  Referencia5?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  NombreRpt?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  Descripcion?: string;
  @Column('int', { nullable: false })
  NNuLineas?: any;
}