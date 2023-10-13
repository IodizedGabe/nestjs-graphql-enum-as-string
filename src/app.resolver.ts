import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { ClassA, ClassAInput } from './graphql.entity';
import { AppService } from './app.service';

@Resolver(() => ClassA)
export class AppResolver {
    constructor(private readonly appService: AppService) {}

    // Policies
    @Mutation(() => ClassA)
    createClassA(@Args('createClassAInput') classAInput: ClassAInput) {
        return this.appService.getHello();
    }
}
