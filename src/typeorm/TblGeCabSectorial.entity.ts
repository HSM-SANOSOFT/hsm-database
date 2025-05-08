import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabSectorial')
export class TblGeCabSectorial {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSectorial?: any;
  @Column('datetime', { nullable: false })
  DFxSectorial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxOficio?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}