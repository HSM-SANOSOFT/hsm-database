import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSectorialMasivo')
export class TblGeDetSectorialMasivo {
  @PrimaryColumn('int', { nullable: false })
  NNuSectorialMasivo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NidNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
}