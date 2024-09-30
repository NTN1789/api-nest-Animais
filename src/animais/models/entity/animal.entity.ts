import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn,UpdateDateColumn} from  "typeorm";



@Entity({
    name:"animais"
})

export class Animal{
    @PrimaryGeneratedColumn({
        unsigned:true,
    })
    id:number;

    @Column()
    nome:string;

    @Column()
    idade:number;

    @Column()
    peso:string;
   
    @Column()
    status:string;

    @Column()
    habitat:string;

    @Column()
    comportamento:string;

    @Column()
    dieta:string;

    @Column()
    observacao:string

    @CreateDateColumn()
    createAt?:Date;

    @UpdateDateColumn()
    updateAt?:Date;
}