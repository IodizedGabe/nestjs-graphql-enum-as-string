import { Field, PartialType, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum MultipleEnum {
    One = 'One',
    Two = 'Two',
}

registerEnumType(MultipleEnum, {
    name: 'MultipleEnum',
    description: 'Enum with multiple keys',
});

export enum SingleEnum {
    Single = 'Single',
}

registerEnumType(SingleEnum, {
    name: 'SingleEnum',
    description: 'Enum with one key',
});

@ObjectType()
export class ClassA {
    // @Field()
    multipleEnum: MultipleEnum;

    // @Field()
    singleEnum: SingleEnum;
}

@InputType()
export class ClassAInput extends PartialType(ClassA, InputType) {}
