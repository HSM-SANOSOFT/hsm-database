import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeConfigCorreo')
export class TblGeConfigCorreo {
  @PrimaryColumn('int', { nullable: false })
  NIdGeConfigCorreo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsServidorSMTP?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuario?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCorreo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsClave?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCorreo?: any;
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
  @Column('int', { nullable: false })
  NNuPuertoSMTP?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUsuario?: any;
}