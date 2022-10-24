import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  pottyName: string;

  @Column({
    name: 'potty_latitude',
    nullable: false,
    default: '',
  })
  latitude: string;

  @Column({
    name: 'potty_longitude',
    nullable: false,
    default: '',
  })
  longitude: string;

  // @Column({
  //   nullable: true,
  //   default: '',
  // })
  // note: string;

  // @Column({
  //   nullable: true,
  //   default: '',
  // })
  // adress: string;

  // @Column({
  //   nullable: false,
  //   default: '',
  // })
  // town: string;

  // @Column({
  //   name: 'potty_country',
  //   nullable: false,
  //   default: '',
  // })
  // country: string;
}
