import { Entity, PrimaryColumn } from 'typeorm';

@Entity('WrkDetNominaAreaBeneficio')
export class WrkDetNominaAreaBeneficio {
  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiArea!: string;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiUsuario!: string;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  CCiEstacion!: string;
}
