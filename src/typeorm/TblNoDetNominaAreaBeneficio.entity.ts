import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoDetNominaAreaBeneficio')
export class TblNoDetNominaAreaBeneficio {
  @PrimaryColumn('int')
  NidNoNomina!: number;

  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiArea!: string;

  @Column({ type: 'varchar', length: 20 })
  CCiUsuario!: string;

  @Column({ type: 'varchar', length: 20 })
  CDsEstacion!: string;
}