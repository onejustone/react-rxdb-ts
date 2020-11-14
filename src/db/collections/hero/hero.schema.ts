import {
    RxJsonSchema
} from 'rxdb'

import { HeroModel } from './hero.model'

export type HeroSchema = RxJsonSchema<HeroModel>;
const schema: HeroSchema = {
    title: 'hero schema',
    description: 'describes a simple hero',
    version: 0,
    keyCompression: false,
    type: 'object',
    properties: {
        name: {
            type: 'string',
            primary: true,
            default: ''
        },
        color: {
            type: 'string',
            default: ''
        },
        maxHP: {
            type: 'number',
            minimum: 0,
            maximum: 1000
        },
        hp: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            default: 100
        },
        team: {
            description: 'color of the team this hero belongs to',
            type: 'string'
        },
        skills: {
            type: 'array',
            maxItems: 5,
            uniqueItems: true,
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    damage: {
                        type: 'number'
                    }
                }
            },
            default: []
        },
        pet: {
            type: 'string',
        }
    },
    required: ['name', 'color', 'hp', 'maxHP']
}

export default schema;
