import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabSectorial')
export class TblGeCabSectorial {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSectorial?: string;
  @Column('datetime', { nullable: false })
  DFxSectorial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxOficio?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorial?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}