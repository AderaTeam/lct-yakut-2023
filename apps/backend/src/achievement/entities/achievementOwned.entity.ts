import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, JoinTable, CreateDateColumn } from "typeorm"
import { Achievement } from "./achievement.entity"
import { User } from "../../user/entities/user.entity"

@Entity()
export class AchievementOwned {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Achievement, {})
    @JoinColumn()
    achievement: Achievement

    @ManyToOne(() => User, (user) => user.achievements, {})
    @JoinColumn()
    user: User

    @CreateDateColumn(
        {
            nullable: false,
        }
    )
    dateOwned: string
}
