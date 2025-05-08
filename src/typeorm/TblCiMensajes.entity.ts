import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TblCiMensajes')
export class TblCiMensajes {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMensaje?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMsjeCorto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMsjeLargo?: string;
}
