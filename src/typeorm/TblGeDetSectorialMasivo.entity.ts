import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSectorialMasivo')
export class TblGeDetSectorialMasivo {
  @PrimaryColumn('int', { nullable: false })
  NNuSectorialMasivo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NidNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
}