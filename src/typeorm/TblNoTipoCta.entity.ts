import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoCta')
export class TblNoTipoCta {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoCta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CDsTipoCta?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  BSnEncera?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCorto?: string;
}