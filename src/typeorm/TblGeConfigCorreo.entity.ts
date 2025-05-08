import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeConfigCorreo')
export class TblGeConfigCorreo {
  @PrimaryColumn('int', { nullable: false })
  NIdGeConfigCorreo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsServidorSMTP?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuario?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCorreo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsClave?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCorreo?: string;
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
  @Column('int', { nullable: false })
  NNuPuertoSMTP?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUsuario?: string;
}