import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetSectorial')
export class TblGeDetSectorial {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioMinimo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorial?: any;
}