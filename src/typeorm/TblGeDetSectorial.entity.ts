import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSectorial')
export class TblGeDetSectorial {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioMinimo?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorial?: string;
}