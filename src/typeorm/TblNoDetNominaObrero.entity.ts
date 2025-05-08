import { Entity, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetNominaObrero')
export class TblNoDetNominaObrero {
  @PrimaryColumn('int')
  NidNoNomina!: number;

  @PrimaryColumn('int')
  NidNoContrato!: number;

  @PrimaryColumn('int')
  NidNoJefeInmediato!: number;
}
